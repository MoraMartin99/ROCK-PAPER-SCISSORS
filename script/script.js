/* variables globales*/
/* ------------------------------------------------------------------------------------------ */
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const controlBox = document.querySelector(".controlBox");
const display = document.querySelector(".display");
const instruction = document.querySelector(".instruction");
const buttonArr = Array.from(document.querySelectorAll(".btn"));
const indicatorArr = Array.from(document.querySelectorAll(".indicator"));
const button2 = document.querySelector(".btn2");
let resultArr;
let round;
let weapon;
let computerWeapon;
/* ------------------------------------------------------------------------------------------ */

/* definimos getWeapon() */
/* ------------------------------------------------------------------------------------------ */
const getWeapon = (button) => {
    const buttonClasslist = button.classList;
    if (buttonClasslist.contains("rock")) {
        return "rock";
    }

    if (buttonClasslist.contains("paper")) {
        return "paper";
    }

    if (buttonClasslist.contains("scissors")) {
        return "scissors";
    }
};

/* ------------------------------------------------------------------------------------------ */

/* definimos getComputerWeapon() */
/* ------------------------------------------------------------------------------------------ */
const getComputerWeapon = () => {
    const weaponArr = ["rock", "paper", "scissors"];
    const index = () => {
        return Math.round(Math.random() * 2);
    };
    return weaponArr[index()];
};
/* ------------------------------------------------------------------------------------------ */

/* definimos clickFeedback() */
/* ------------------------------------------------------------------------------------------ */
const clickFeedback = (button) => {
    button.classList.add("click");

    countdownCall(200, () => {
        button.classList.remove("click");
    });
};
/* ------------------------------------------------------------------------------------------ */

/* definimos resetInstruction() */
/* ------------------------------------------------------------------------------------------ */
const resetInstruction = () => {
    const insideText = `<p class="reset">
        Elija sabiamente<span class="dot n1">.</span><span class="dot n2">.</span><span class="dot n3">.</span>
    </p>`;

    instruction.innerHTML = insideText;

    showIndicator();
};
/* ------------------------------------------------------------------------------------------ */

/* definimos setResult() */
/* ------------------------------------------------------------------------------------------ */
const setResult = (playerChoice, computerChoice, round) => {
    let result;
    switch (true) {
        case playerChoice == computerChoice:
            result = "draw";
            break;
        case playerChoice == "rock" && computerChoice == "paper":
            result = "lose";
            break;
        case playerChoice == "rock" && computerChoice == "scissors":
            result = "win";
            break;
        case playerChoice == "paper" && computerChoice == "rock":
            result = "win";
            break;
        case playerChoice == "paper" && computerChoice == "scissors":
            result = "lose";
            break;
        case playerChoice == "scissors" && computerChoice == "rock":
            result = "lose";
            break;
        case playerChoice == "scissors" && computerChoice == "paper":
            result = "win";
            break;
    }
    resultArr.push({ round: round, playerWeapon: playerChoice, computerWeapon: computerChoice, result: result });
};
/* ------------------------------------------------------------------------------------------ */

/* definimos showResult() */
/* ------------------------------------------------------------------------------------------ */
const showResult = () => {
    const currentResult = resultArr[resultArr.length - 1];
    const playerRoute = getRoute(currentResult.playerWeapon);
    const computerRoute = getRoute(currentResult.computerWeapon);
    let resultText;
    let insideText;

    switch (currentResult.result) {
        case "win":
            resultText = `<p class="result">El resultado es: tu <span class="${currentResult.result}">ganas</span>!</p>`;
            break;
        case "lose":
            resultText = `<p class="result">El resultado es: tu <span class="${currentResult.result}">pierdes</span>!</p>`;
            break;
        case "draw":
            resultText = `<p class="result">El resultado es: empate!</p>`;
            break;
    }

    insideText = `<div class="resultBox">
                    <div class="panel">
                        <div class="playerBox">
                            <p class="player">Tu</p>
                            <img src="${playerRoute}" alt="choice" class="choice" />
                        </div>
                        <p class="vs">VS</p>
                        <div class="playerBox">
                            <p class="player">COMP</p>
                            <img src="${computerRoute}" alt="choice" class="choice" />
                        </div>
                    </div>
                    <div class="container">
                        ${resultText}
                    </div>
                </div>`;

    instruction.innerHTML = insideText;
};
/* ------------------------------------------------------------------------------------------ */

/* definimos showIndicator() */
/* ------------------------------------------------------------------------------------------ */
const showIndicator = () => {
    resultArr.forEach((item) => {
        const target = document.querySelector(`.r${item.round} .indicatorIcon`);
        let src;
        if (item.result == "win") {
            src = "./img/check.png";
        } else if (item.result == "lose") {
            src = "./img/x.png";
        } else if (item.result == "draw") {
            src = "./img/equals.png";
        }
        target.setAttribute("src", src);
        target.style.visibility = "visible";
    });
};
/* ------------------------------------------------------------------------------------------ */

/* definimos hideIndicator() */
/* ------------------------------------------------------------------------------------------ */
const hideIndicator = () => {
    indicatorArr.forEach((item) => {
        const target = item.querySelector(`.indicatorIcon`);
        target.style.visibility = "hidden";
    });
};
/* ------------------------------------------------------------------------------------------ */

    }

    switch (true) {
        case totalPointComputer === totalPointPlayer:
            alert(`¡Es un empate!
            
            Tus rounds ganados: ${totalPointPlayer}
            Rounds ganados por la computadora: ${totalPointComputer}`);
            break;
        case totalPointPlayer > totalPointComputer:
            alert(`¡Tu ganaste!
            
            Tus rounds ganados: ${totalPointPlayer}
            Rounds ganados por la computadora: ${totalPointComputer}`);
            break;
        case totalPointPlayer < totalPointComputer:
            alert(`¡Tu perdiste!
            
            Tus rounds ganados: ${totalPointPlayer}
            Rounds ganados por la computadora: ${totalPointComputer}`);
    }
}
