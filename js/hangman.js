/*
Create by PauloRASilva
https://github.com/PRASILVA5
*/

var dev_tools = [
    "github",
    "gitlab",
    "slack",
    "rocketchat",
    "skype",
    "trello",
    "visual studio",
    "powershell"
]

var r = false;
var answer = '';
var points = 5;
var mistakes = 0;
var guessed = [];
var space = "\xa0\xa0\xa0\xa0"
var str = "";
var win = 0;

function randomWord(){
    answer = dev_tools[Math.floor(Math.random() * dev_tools.length)];


}


function guessPrint(){
    randomWord();
    answerSplit = answer.split("");
       
    for(var i = 0; i < answerSplit.length; i++){
        if(answerSplit[i] != " "){
            guessed.push("__");
            if(i == answerSplit.length - 1 ){
                str = str + "__";
            }
            else{
                str = str + "__\xa0\xa0";
            }
            
        }
        else{
            guessed.push("spaced");
            str = str + "\xa0\xa0\xa0\xa0";
        }
    }
    document.getElementById('display').innerHTML = str;
    str= '';
}

function guessInput(key){
    var count = 0;

    for(var i = 0; i < answerSplit.length; i++){
        if(answerSplit[i] == key){
            guessed[i] = answerSplit[i];
            count += 1;
        }
    }

    for(var i = 0; i < answerSplit.length; i++){
        if(guessed[i] != "spaced"){
            if(i == answerSplit.length - 1 ){
                str = str + guessed[i];
            }
            else{
                str = str + guessed[i] + "\xa0\xa0";
            }

        }
        else{
            str = str + space;
        }

    }

    if(count == 0){
        points -= 1;
    }

    if(points <= 0){
        document.getElementById('talk').innerHTML = answer;
        document.getElementById('mistakes').innerHTML = points;
        document.getElementById('display').innerHTML = "YOU LOSE!!!";
        r = confirm("You lose :,(   Do you want to play more?")
        if (r == true) {
            refreshPage();
          } else {
            txt = "You pressed Cancel!";
          } 
    }
    else{
        document.getElementById('mistakes').innerHTML = points;
        document.getElementById('display').innerHTML = str;
        for(var i = 0; i < answerSplit.length; i++){
            if(guessed[i] != "__"){
                win = win + 1 ;
            }   
        }

        if( win == guessed.length){
            document.getElementById('talk').innerHTML = "NICE! You Won!!!";
            r = confirm("You won!!! Do you want to play more?")
            if (r == true) {
                refreshPage();
            } 
            else{
                txt = "You pressed Cancel!";
            } 
            
        }


    }

    win = 0;
    str = "";
    count = 0;

}

function refreshPage(){
    window.location.reload();
}