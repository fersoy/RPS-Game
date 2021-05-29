var wins = 0;
var losses = 0;
var ties = 0;

// var pictures = [];
var computerChoices = ["r", "p", "s"];

var bill = document.getElementById("intro");
var kull = document.getElementById("users");
var userPic = document.getElementById("user-choice-pic");
var comp = document.getElementById("computers");
var compPic = document.getElementById("computer-choice-pic");
var winner = document.getElementById("wins");
var loser = document.getElementById("loses");
var tier = document.getElementById("tiess");

document.onkeyup = function(event) {
    var userGuess = event.key;

    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    if ((userGuess === "r") || (userGuess === "p") || (userGuess === "s")) { 

        if ((userGuess === "r" && computerGuess === "s") ||
            (userGuess === "s" && computerGuess === "p") || 
            (userGuess === "p" && computerGuess === "r")) {
            wins++;
        } else if (userGuess === computerGuess) {
            ties++;
        } else {
            losses++;
        }
        bill.textContent = "";
        kull.textContent = "You chose: " + userGuess;
        comp.textContent = "The computer chose: " + computerGuess;
        winner.textContent = "wins: " + wins;
        loser.textContent = "losses: " + losses;
        tier.textContent = "ties: " + ties;
    }
};

