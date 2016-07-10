var Warrior = function(user, health, strength){
  this.user = user;
  this.health = health;
  this.strength = strength;
};

Warrior.prototype.attack = function(warrior1, warrior2) {
    warrior2.health = warrior2.health - warrior1.strength
};


var Pit = function(viking1, viking2){
  this.viking1 = viking1
  this.viking2 = viking2
  var turns = Math.floor((Math.random() * 200) + 1);
  var round = 1

  this.combat = function(){
    while ((round<turns) && (viking1.health>viking2.strength) && (viking2.health>viking1.strength)) {
      viking1.attack(viking1, viking2);
      viking2.attack(viking2, viking1);
      console.log("Round " + round + "!!!")
      console.log(viking1.user + ": " + viking1.health + " life points");
      console.log(viking2.user + ": " + viking2.health + " life points");
      console.log("------------")
      round++;
    }
    if (viking1.health>viking2.health){
      console.log(viking1.user + " Wins!");
    } else if (viking1.health<viking2.health) {
      console.log(viking2.user + " Wins!");
    }
  }
};


var War = function(viking, saxon){
  this.viking = viking
  this.saxon = saxon
  var vikings_dead = 0
  var saxons_dead = 0
  var turns = Math.floor((Math.random() * 150) + 30);
  var round = 1


  this.fight = function(){
    while ((round<turns) && (viking.health>0) && (saxon.health>0)) {
      viking.attack(viking, saxon);
      saxon.attack(saxon, viking);
      console.log("Round " + round + "!!!")
      console.log("Viking: " + ": " + viking.health + " life points");
      console.log("Saxon: " + saxon.health + " life points");
      console.log("------------")
      round++;

    if (viking.health <= 0){
      vikings_dead++;
      viking.health = Math.floor((Math.random() * 100) + 50)
    } else if (saxon.health <= 0){
      saxons_dead++;
      saxon.health = Math.floor((Math.random() * 70) + 40)
      }
    }
  console.log("After a bloody battle, Vikings kills " + saxons_dead + " weak saxons, and Saxons kills " + vikings_dead + " brave vikings");
  }
};

var viking1 = new Warrior("odin", Math.floor((Math.random() * 100) + 50), Math.floor((Math.random() * 20) + 10))
var viking2 = new Warrior("thor", Math.floor((Math.random() * 100) + 50), Math.floor((Math.random() * 20) + 10))
var viking3 = new Warrior("loki", Math.floor((Math.random() * 100) + 50), Math.floor((Math.random() * 20) + 10))

var saxon1 = new Warrior("", 50, 5)
var saxon3 = new Warrior("", Math.floor((Math.random() * 70) + 40), Math.floor((Math.random() * 10) + 5))

var pit = new Pit(viking1, viking2);
pit.combat();

console.log("****************************************");
console.log("After the training, its time to WAR!!!!!");
console.log("****************************************");

var war = new War(viking3, saxon3)
war.fight();
