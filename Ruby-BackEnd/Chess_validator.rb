class Piece
  attr_accessor :x1, :y1, :x2, :y2
@@moves_array = [
["a", 2, "a", 3],
["a", 2, "a", 4],
["a", 2, "a", 5],
["a", 7, "a", 6],
["a", 7, "a", 5],
["a", 7, "a", 4],
["a", 7, "b", 6],
["b", 8, "a", 6],
["b", 8, "c", 6],
["b", 8, "d", 7],
["e", 2, "e", 3],
["e", 3, "e", 2]
]

  def initialize (name)
    @name = name
    @x1 = x1
    @y1 = y1
    @x2 = x2
    @y2 = y2
  end

  def check_pos
    board = [
[:bR, :bN, :bB, :bQ, :bK, :bB, :bN, :bR],
[:bP, :bP, :bP, :bP, :bP, :bP, :bP, :bP],
[:nil, :nil, :nil, :nil, :nil, :nil, :nil, :nil],
[:nil, :nil, :nil, :nil, :nil, :nil, :nil, :nil],
[:nil, :nil, :nil, :nil, :nil, :nil, :nil, :nil],
[:nil, :nil, :nil, :nil, :nil, :nil, :nil, :nil],
[:wP, :wP, :wP, :wP, :wP, :wP, :wP, :wP],
[:wR, :wN, :wB, :wQ, :wK, :wB, :wN, :wR]
]

    @@moves_array.each do |item|
     item  
      @x2 = item[2]
      @y2 = item[3]
      hor = @x2.ord-97
      ver = (@y2-8)*-1 
      if board[hor][ver] == :nil
        puts "In coord #{@x2}#{@y2} you will find an EMPTY SPACE"
      else
        puts "In coord #{@x2}#{@y2} you will have a COLISSION!!!"
      end
    end
  end

  def move_piece
    puts "+++++#{@name}+++++"
    @@moves_array.each do |item|
    item  
    @x1 = item[0]
    @y1 = item[1]
    @x2 = item[2]
    @y2 = item[3]
    move
    end
     puts "----------------------"
  end
end

class Rook < Piece
  def move
    if @x1 == @x2 || @y1 == @y2
      puts "Moving from #{@x1}#{@y1} to #{@x2}#{@y2} is LEGAL"
    else
      puts "Moving from #{@x1}#{@y1} to #{@x2}#{@y2} is ILEGAL!!!"
    end
  end
end

class Bishop < Piece
   def move
    z=@y1-@y2
    if (@x1.ord == @x2.ord+z && @y1 == @y2+z) ||
       (@x1.ord == @x2.ord-z && @y1 == @y2-z) ||
       (@x1.ord == @x2.ord+z && @y1 == @y2-z) ||
       (@x1.ord == @x2.ord-z && @y1 == @y2+z)
      puts "Moving from #{@x1}#{@y1} to #{@x2}#{@y2} is LEGAL"
    else
      puts "Moving from #{@x1}#{@y1} to #{@x2}#{@y2} is ILEGAL!!!"
    end
  end
end

class Queen < Piece
  def move
    z=@y1-@y2
    if (@x1 == @x2 || @y1 == @y2) ||
       (@x1.ord == @x2.ord+z && @y1 == @y2+z) ||
       (@x1.ord == @x2.ord-z && @y1 == @y2-z) ||
       (@x1.ord == @x2.ord+z && @y1 == @y2-z) ||
       (@x1.ord == @x2.ord-z && @y1 == @y2+z)
      puts "Moving from #{@x1}#{@y1} to #{@x2}#{@y2} is LEGAL"
    else
      puts "Moving from #{@x1}#{@y1} to #{@x2}#{@y2} is ILEGAL!!!"
    end
  end
end

class King < Piece
  def move
    if (@x1.ord == @x2.ord+1 && @y1 == @y2) ||
       (@x1.ord == @x2.ord-1 && @y1 == @y2) ||
       (@x1.ord == @x2.ord && @y1 == @y2+1) ||
       (@x1.ord == @x2.ord && @y1 == @y2-1) 
      puts "Moving from #{@x1}#{@y1} to #{@x2}#{@y2} is LEGAL"
    else
      puts "Moving from #{@x1}#{@y1} to #{@x2}#{@y2} is ILEGAL!!!"
    end
  end
end

class Knight < Piece
  def move
    if (@x1.ord == @x2.ord-1 && @y1 == @y2)
      puts "Moving from #{@x1}#{@y1} to #{@x2}#{@y2} is LEGAL"
    else
      puts "Moving from #{@x1}#{@y1} to #{@x2}#{@y2} is ILEGAL!!!"
    end
  end
end

class Pawn_w < Piece
  def move
    if (@x1.ord == @x2.ord+2 && @y1 == @y2+1) ||
       (@x1.ord == @x2.ord+2 && @y1 == @y2-1) ||
       (@x1.ord == @x2.ord-2 && @y1 == @y2+1) ||
       (@x1.ord == @x2.ord-2 && @y1 == @y2-1) ||

       (@x1.ord == @x2.ord+1 && @y1 == @y2+2) ||
       (@x1.ord == @x2.ord+1 && @y1 == @y2-2) ||
       (@x1.ord == @x2.ord-1 && @y1 == @y2+2) ||
       (@x1.ord == @x2.ord-1 && @y1 == @y2-2) 
      puts "Moving from #{@x1}#{@y1} to #{@x2}#{@y2} is LEGAL"
    else
      puts "Moving from #{@x1}#{@y1} to #{@x2}#{@y2} is ILEGAL!!!"
    end
  end
end

class Pawn_b < Piece
  def move
    if (@x1.ord == @x2.ord-1 && @y1 == @y2)
      puts "Moving from #{@x1}#{@y1} to #{@x2}#{@y2} is LEGAL"
    else
      puts "Moving from #{@x1}#{@y1} to #{@x2}#{@y2} is ILEGAL!!!"
    end
  end
end

rook1 = Rook.new "ROOK"
rook1.move_piece
bishop1 = Bishop.new "BISHOP"
bishop1.move_piece
queen1 = Queen.new "QUEEN"
queen1.move_piece
king1 = King.new "KING"
king1.move_piece
knight1 = Knight.new "KNIGHT"
knight1.move_piece
pawn1w = Pawn_w.new "PAWN WHITE"
pawn1w.move_piece
pawn1b =Pawn_b.new "PAWN BLACK"
pawn1b.move_piece

puts "+++++++++++++++++++++++++++\n"
puts "==>Checking if final position is empty or not<=="
check_spaces = Piece.new "" 
check_spaces.check_pos 




