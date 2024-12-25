//  const choices = document.querySelectorAll(".choice");

//  const compchoice = () => {
//     let options = ["stone","paper","sessor"];
//     let randomval = Math.floor(Math.random() * 3);
//     return options[randomval];
//  }


//     const matchdraw = () => {
//         console.log("match draw");
//     }



// const playgame = (userchoice) => {
//     console.log("user choice = ",userchoice);
//     const computerchoice = compchoice();
//     console.log("computer choice = ", computerchoice);
//     if(userchoice===computerchoice){
//               matchdraw();
//     }

// }



//  choices.forEach((choice) => {
//          console.log(choice);
//          choice.addEventListener("click", () => {
//             let userchoice = choice.getAttribute("id");
//             playgame(userchoice);
//          });
//  }); 

const choices = document.querySelectorAll(".choice");
const userScoreElement = document.getElementById("user-score");
const compScoreElement = document.getElementById("comp-score");
const msgElement = document.getElementById("msg");

let userScore = 0;
let compScore = 0;

const compChoice = () => {
    let options = ["rock", "paper", "sessor"];
    let randomVal = Math.floor(Math.random() * 3);
    return options[randomVal];
}

const updateScores = () => {
    userScoreElement.textContent = userScore;
    compScoreElement.textContent = compScore;
}

const updateMessage = (message) => {
    msgElement.textContent = message;
}

const matchDraw = () => {
    updateMessage("It's a draw!");
}

const userWins = () => {
    userScore++;
    updateMessage("You win!");
    updateScores();
}

const compWins = () => {
    compScore++;
    updateMessage("Computer wins!");
    updateScores();
}

const playGame = (userChoice) => {
    const computerChoice = compChoice();
    console.log("User choice: ", userChoice);
    console.log("Computer choice: ", computerChoice);

    if (userChoice === computerChoice) {
        matchDraw();
    } else if (
        (userChoice === "rock" && computerChoice === "sessor") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "sessor" && computerChoice === "paper")
    ) {
        userWins();
    } else {
        compWins();
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
