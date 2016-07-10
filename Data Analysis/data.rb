require 'csv'

class Manage_data 
  def initilize(file)
    @file = file
  end

  #1. Leer el CSV y almacenarlo en un array
  def load_data
    @data ||= CSV.read(@file)
  end

  #2. Añadir cabecera con nombres de campo al array FECHA, OPEN, HIGH, LOW, CLOSE, VOLUMEN
  def add_header(header)
    load_data.insert(0, header)
  end

  # 3. Mostrar las "n" últimas líneas
  def last_rows(number)
    load_data.last(number)
  end

  # 4. Ordenar de forma ascendente el array por el campo HIGH y guardar el resultado en otro array
  def sort_by_high
    data_sort_by_high = load_data.sort{ |x,y| y[2] <=> x[2] }
    data_sort_by_high.insert(0, data[0])
  end

  # 5. ¿Cuál es la media de precio CLOSE para cada uno de los años?
  def close_averege_by_year
    years = load_data.map{ |row| row[0][6..7] }.uniq
    average_close = years.map do |year|
      data_by_year = data.select{ |row| row[0][6..7] == year } 
      data_by_year.reduce(0.0){ |sum, close| sum + close[4].to_f } / data_by_year.size
    end
  end

  # 6. ¿Cuántos datos faltan? (minutos que no aparecen) (pueden ser varias líneas de código)
  def wrong_minutes
    i = 0
    load_data.each do |row|
      i = i+1 unless row[0][12..13] =~ /^([0-5]?\d)$/ 
    end
  end

  # 7. ¿Cómo rellenarías con valor 0 los datos que faltan?
  def correct_minutes
    load_data.each do |row|
      row[0][12..13] = "00" unless row[0][12..13] =~ /^([0-5]?\d)$/ 
    end
  end

  # 8. Selecciona todas las filas cuyo valor CLOSE es mayor que 1.2 en un nuevo array
  def close_higher_than(number)
    load_data.select{ |row| row[4].to_f > number }
  end

  # 9. ¿Cómo crearías una nueva columna llamada MED que contenga el valor medio de OPEN, HIGH, LOW y CLOSE de cada línea?
  def add_med
    load_data.each do |row|
      med = row[1..4].reduce(0.0){ |sum, med| sum + med.to_f } / 4.0
      row << med.to_s
    end
  end

  # 10 ¿Cómo representarías gráficamente el valor CLOSE para toda la serie?
  #Representación de los valores de CLOSE en un histograma según la frecuancia con la que se han repetido.
  def histogram
    frequencies = Hash.new(0)
    load_data.each { |row| frequencies[row[4]] += 1 }
    frequencies.sort_by {|a, b| a }
  end
end


