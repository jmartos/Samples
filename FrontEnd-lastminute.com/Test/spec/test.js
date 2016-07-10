context = describe;

describe("the JavaScript language", function(){

  it("should load hotel name from JSON", function() {
    expect(data.hotels[1].name).toEqual("Hotel Snowy Mountains");
    expect(data.hotels[3].name).toEqual("Hotel Middle of Nowhere");
  });

  it("should load hotel price from JSON", function() {
    loadData();
    expect(data.hotels[1].price).toEqual(108.00);
    expect(data.hotels[3].price).toEqual(199.00);
  });

  it("should load hotel rating from JSON", function() {
    loadData();
    expect(data.hotels[1].rating).toEqual(5);
    expect(data.hotels[3].rating).toEqual(4);
  });

  it("should load hotel img from JSON", function() {
    loadData();
    expect(data.hotels[1].img).toEqual("imgs/sunny.jpg");
    expect(data.hotels[3].img).toEqual("imgs/nowhere.jpg");
  });

  it("should load list", function() {
   function countObject(obj) {
    var count = 0;
    for(var i in obj)
      if(obj.hasOwnProperty(i))
        count++;
      return count;
    };
    loadList();
    expect(countObject(document.getElementsByTagName("li"))).toEqual(countObject(data.hotels))
  });

});