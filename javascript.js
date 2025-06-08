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

//playRound is where the answers from both getComputerChoice and getHumanChoice will be compared to one another to determine a winner. There’s a final check at the end for if anyone has reached the winning score of “5”, and instructions to carry on up to a maximum of 5 rounds if not. //

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        alert("It's a tie! Let's try again!");
        return "tie";
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        alert("Bang! Rock bashes scissors - you win this round!");
        humanScore++;
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        alert("Oh no, paper wraps rock - you lose this round!");
        computerScore++;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        alert("Ouch, scissors bash rock - you lose this round!");
        computerScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        alert("Slice! Scissors cut paper - you win this round!");
        humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        alert("Crunch! Paper wraps rock - you win this round!");
        humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        alert("Damn, scissors slice paper - you lose this round!");
        computerScore++;
    }
    alert(`Now the scores are You ${humanScore} - Computer ${computerScore}!`);

    if (humanScore === 5) {
        return "humanWin";
    } else if (computerScore === 5) {
        return "computerWin";
    }
}

