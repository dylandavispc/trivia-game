//INITIALIZATION=====================================================================
//Variables
let correct = 0;
let incorrect = 0;
let unanswered = 0;
const arnold = {
    lastName: "Schwarzenagger",
    age: 71,
    height: "6'2'",
    born: "Austria",
    origin: "body builder"
} 
const game = {
    questions : ["How do you spell Arnold's last name?", "How old is he (2019)?", "What's Arnolds height?",
    "Where was Arnold born?", "How did he become famous?"],
    ques1 : ["Schwarzeneger", "Schwarzennager", "Schwarzenagger", "Schwarzenegger"],
    ques2 : [68, 45, 71, 86],
    ques3 : ["5'11'", "6'2'", "6'4'", "6'6'"],
    ques4 : ["Germany", "Russia", "USA", "Austria"],
    ques5 : ["body builder", "acting", "smoking weed", "army tank hero"],
}

//Displays
document.getElementById("gameOverScreen").style.display = "none";
document.getElementById("gameStartScreen").style.display = "block";
document.getElementById("container").style.display = "none";

//Question Gameplay
$("#question1").text(game.questions[0]);
$("#question2").text(game.questions[1]);
$("#question3").text(game.questions[2]);
$("#question4").text(game.questions[3]);
$("#question5").text(game.questions[4]);

for (let i=0; i < game.ques1.length; i++) {
    let a = $("<button>");
    a.addClass("ques-btn");
    a.attr("data-name", game.ques1[i]);
    a.text(game.ques1[i]);
    $("#guess1").append(a);
}
for (let i=0; i < game.ques2.length; i++) {
    let a = $("<button>");
    a.addClass("ques-btn");
    a.attr("data-name", game.ques2[i]);
    a.text(game.ques2[i]);
    $("#guess2").append(a);
}
for (let i=0; i < game.ques3.length; i++) {
    let a = $("<button>");
    a.addClass("ques-btn");
    a.attr("data-name", game.ques3[i]);
    a.text(game.ques3[i]);
    $("#guess3").append(a);
}
for (let i=0; i < game.ques4.length; i++) {
    let a = $("<button>");
    a.addClass("ques-btn");
    a.attr("data-name", game.ques4[i]);
    a.text(game.ques4[i]);
    $("#guess4").append(a);
}
for (let i=0; i < game.ques5.length; i++) {
    let a = $("<button>");
    a.addClass("ques-btn");
    a.attr("data-name", game.ques5[i]);
    a.text(game.ques5[i]);
    $("#guess5").append(a);
}


//BUTTONS==========================================================================
document.getElementById("startButton").onclick = function(){
    gameStart();
}
document.getElementById("resetButton").onclick = function(){
    gameReset();
}

//FUNCTIONS++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Game Initializers
function gameStart() {
    document.getElementById("gameStartScreen").style.display = "none";
    document.getElementById("container").style.display = "block";
    timer();
}
function gameReset() {
    document.getElementById("gameOverScreen").style.display = "none";
    document.getElementById("gameStartScreen").style.display = "none";
    document.getElementById("container").style.display = "block";
    timer();
    correct = 0;
    incorrect = 0;
    unanswered = 0;
}
function gameOver() {
    document.getElementById("gameOverScreen").style.display = "block";
    document.getElementById("container").style.display = "none";
}


//Question Checker
// function questionChecker() {
//     if () {
//         correct++;
//     }
//     else if () {
//         incorrect++;
//     }
//     else {
//         unanswered++;
//     }
// }


//Timer
function timer(){
    var sec = 59;
    var timer = setInterval(function(){
        document.getElementById('timer').innerHTML='00:'+sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer);
            gameOver();
        }
    }, 1000);
}
function buttonPress(){
    return this.clicked === 0;
}
