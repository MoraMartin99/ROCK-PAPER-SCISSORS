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
        }
        totalPointComputer += result.scoreComputer;
        totalPointPlayer += result.scorePlayer;
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
