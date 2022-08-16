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
    }
    return getWeapon(choice);
}

/* round retorna un objeto con las keys player y computer y con los value 1 para el que gano y 0 para el que perdió. en caso de empate ambos reciben 0 */
function round(player, computer) {
    let pointForPlayer = 0;
    let pointForComputer = 0;

    if (player === "Rock") {
        switch (computer) {
            case "Paper":
                pointForPlayer = 0;
                pointForComputer = 1;
                break;
            case "Scissors":
                pointForPlayer = 1;
                pointForComputer = 0;
        }
    } else if (player === "Paper") {
        switch (computer) {
            case "Rock":
                pointForPlayer = 1;
                pointForComputer = 0;
                break;
            case "Scissors":
                pointForPlayer = 0;
                pointForComputer = 1;
        }
    } else if (player === "Scissors") {
        switch (computer) {
            case "Paper":
                pointForPlayer = 1;
                pointForComputer = 0;
                break;
            case "Rock":
                pointForPlayer = 0;
                pointForComputer = 1;
        }
    }
    return { scorePlayer: pointForPlayer, scoreComputer: pointForComputer };
}

/* game simulará 5 rounds, llevara conteo del ganador de cada round y mostrara un string con el ganador del juego */
function game() {
    let totalPointPlayer = 0;
    let totalPointComputer = 0;

    for (let roundNumber = 1; roundNumber <= 5; roundNumber++) {
        let playerWeapon = playerChoice();
        let computerWeapon = computerChoice();
        let result = round(playerWeapon, computerWeapon);

        if (result.scorePlayer === 0 && result.scoreComputer === 0) {
            alert(`¡Es un empate!
            
            Tu elegiste: ${playerWeapon}
            La computadora eligió: ${computerWeapon}`);
        } else if (result.scorePlayer === 1) {
            alert(`¡Tu ganas!
            
            Tu elegiste: ${playerWeapon}
            La computadora eligió: ${computerWeapon}`);
        } else {
            alert(`¡Tu pierdes!
            
            Tu elegiste: ${playerWeapon}
            La computadora eligió: ${computerWeapon}`);
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
