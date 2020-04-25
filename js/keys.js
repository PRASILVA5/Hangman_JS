/*
Create by PauloRASilva
https://github.com/PRASILVA5
*/

var keyString = "qwertyuiopasdfghjklzxcvbnm";
var eventString = "81,87,69,82,84,89,85,73,79,80,65,83,68,70,71,72,74,75,76,90,88,67,86,66,78,77";
var keyList = [];
var eventList = [];

function keyPress (){

    keyList = keyString.split("");
    eventList = eventString.split(",");

}   

keyPress ();

document.addEventListener('keydown', function(event) {

    if(eventList.includes(String(event.keyCode))){
        guessInput(keyList[eventList.indexOf(String(event.keyCode))]);
    }
  
});