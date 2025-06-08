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

console.log(getComputerChoice());