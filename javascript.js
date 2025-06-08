// getComputerChoice purpose is to randomly select between rock, paper, scissors, in order to compare this in the future against the player choice //

function getComputerChoice() {
    let x = Math.random();
    if (x <= 0.333) {
        return "rock";
    } else if (x > 0.333 && x <= 0.666) {
        return "scissors";
    } else {
        return "paper";
    }
}

//getHumanChoice uses the prompt to get the human to provide a (hopefully) valid answer in rock, paper, or scissors. .toLowerCase() is used to always push whatever version is entered (eg. rOCK or SCIssorS) into lower case to make comparison later possible //

function getHumanChoice() {
    const answer = prompt(`Rock, Paper, Scissors.. make your 
    choice!`).toLowerCase();
    if (answer !== "rock" && answer !== "paper" && answer !== "scissors") {
        alert("Sorry, it's gotta be rock, paper, or scissors this time around! Lightning, gun, and 'God' all coming in future DLC!");
        return getHumanChoice();
    } else {
    return answer;
    }
}

// here be player / computer score variables //

let humanScore = 0;
let computerScore = 0;

