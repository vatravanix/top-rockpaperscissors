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
let validRounds = 0;

//playRound is where the answers from both getComputerChoice and getHumanChoice will be compared to one another to determine a winner. There’s a final check at the end for if anyone has reached the winning score of “5”, and instructions to carry on up to a maximum of 5 rounds if not. //

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        alert("It's a tie! Let's try again!");
        return "tie";
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        alert("Bang! Rock bashes scissors - you win this round!");
        humanScore++;
        validRounds++;
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        alert("Oh no, paper wraps rock - you lose this round!");
        computerScore++;
        validRounds++;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        alert("Ouch, scissors bash rock - you lose this round!");
        computerScore++;
        validRounds++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        alert("Slice! Scissors cut paper - you win this round!");
        humanScore++;
        validRounds++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        alert("Crunch! Paper wraps rock - you win this round!");
        humanScore++;
        validRounds++;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        alert("Damn, scissors slice paper - you lose this round!");
        computerScore++;
        validRounds++;
    }
    alert(`Now the scores are You ${humanScore} - Computer ${computerScore}!`);

    if (humanScore === 5) {
        return "humanWin";
    } else if (computerScore === 5) {
        return "computerWin";
    }
}

// ifTieResult function is to stop the problem of double-tie rounds counting as a round //

function ifTieResult () {
    let result = playRound(getHumanChoice(), getComputerChoice());
    if (result === "tie") {
        return ifTieResult();
    }
    return result;
}

// the playGame function enables the above playRound function to cycle through a full 5-round game to determine the overall winner. There are win condition alerts set for all four different outcomes: human wins 5 in 5, computer wins 5 in 5, human wins with majority within 5 rounds, computer wins with majority within 5 rounds. Ties within rounds are also handled as non-counting round and enable the game to loop that same round.  //


function playGame() {
    // round 1 //
    let result = ifTieResult();
    if (result === "humanWin") {
        alert(`...and the humans clinch this 5-round extravaganza! Congratulations, you're the winner!`);
        return;
    } else if (result === "computerWin") {
        alert(`...and they told us not to worry about the robot revolution. I'm sorry, but the computer's have taken the victory. Better luck next time!`);
        return;
    }
    // round 2 //
    result = ifTieResult();
    if (result === "humanWin") {
        alert(`...and the humans clinch this 5-round extravaganza! Congratulations, you're the winner!`);
        return;
    } else if (result === "computerWin") {
        alert(`...and they told us not to worry about the robot revolution. I'm sorry, but the computer's have taken the victory. Better luck next time!`);
        return;
    }
    // round 3 //
    result = ifTieResult();
    if (result === "humanWin") {
        alert(`...and the humans clinch this 5-round extravaganza! Congratulations, you're the winner!`);
        return;
    } else if (result === "computerWin") {
        alert(`...and they told us not to worry about the robot revolution. I'm sorry, but the computer's have taken the victory. Better luck next time!`);
        return;
    }
    // round 4 //
    result = ifTieResult();
    if (result === "humanWin") {
        alert(`...and the humans clinch this 5-round extravaganza! Congratulations, you're the winner!`);
        return;
    } else if (result === "computerWin") {
        alert(`...and they told us not to worry about the robot revolution. I'm sorry, but the computer's have taken the victory. Better luck next time!`);
        return;
    }
    // round 5 - created a function here to ensure that only these victory messages display in event of a non-majority-win and not both //
    result = ifTieResult();
    function finalRound() {
    if (result === "humanWin") {
        alert(`...and the humans clinch this 5-round extravaganza! Congratulations, you're the winner!`);
        return;
    } else if (result === "computerWin") {
        alert(`...and they told us not to worry about the robot revolution. I'm sorry, but the computer's have taken the victory. Better luck next time!`);
        return;
    }
    }
    finalRound();

    if (validRounds < 5) {
        finalRound();
    }

    
// this is the part that checks who wins by majority if all 5 rounds played and no-one won all 5 in a row //
    
    if (humanScore > computerScore && humanScore != 5) {
        alert(`After 5 long, bloody rounds, we have a winner by majority! Drumroll please... it's you! The humans have done it, with a final score of ${humanScore} to ${computerScore}! Time to celebrate with a fleshy hug and a glass of the robot's deadliest enemy: water!`);
    } else if (humanScore < computerScore && computerScore != 5) {
        alert(`After 5 long, bloody rounds, we have a winner by majority! Drumroll please... ah, forget about that, just get to the bunker, quick! The robots have won, with a final score of ${computerScore} to ${humanScore}! The robot uprising is upon us!`);
    }
}

// this is where the playGame function is called to start the game //

playGame();
