function loadData() {
  var request = new XMLHttpRequest();
  request.open("GET", "../data/hotels.json", false);
  request.send(null);
  data = JSON.parse(request.responseText);
  console.log("ok");
}

function loadList() {
  var i = 0
  for ( var i = 0; i < data.hotels.length; i++) {
    var obj = data.hotels[i];
    document.getElementById("hotel-list").appendChild(document.createElement("li")).appendChild(document.createTextNode(obj.name));
  }
}

function loadDetails () {
  var row = document.getElementsByTagName("li");
  for (var i = 0, len = row.length; i < len; i++){
    (function(index){
      row[i].onclick = function(){
        document.getElementById("name").innerHTML = data.hotels[index].name;
        document.getElementById("image").src = data.hotels[index].imgUrl;
        document.getElementById("rating").src = "imgs/rating"+ data.hotels[index].rating +".png";
        document.getElementById("price").innerHTML = "£" + data.hotels[index].price.toFixed(2);
      }    
    })(i);
  }
}

function launch(){
  loadData();
  loadList();
  loadDetails();
}

window.onload = launch;
