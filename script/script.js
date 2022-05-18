/*  getWeapon retorna un string con la arma asignada a un index*/
function getWeapon(index) {
    let weapons = ["Rock", "Paper", "Scissors"];
    return typeof index !== "number" || index >= weapons.length
        ? undefined
        : weapons[index];
}
/* computerChoice retorna un string con una elección aleatoria de getWeapon */
function computerChoice() {
    return getWeapon(Math.round(Math.random() * 2));
}

/* playerChoice asegura mediante un bucle y condicionales que el jugador escriba un input válido */
function playerChoice() {
    let choice = NaN;
    while (choice < 0 || choice > 2 || isNaN(choice)) {
        choice = parseInt(
            prompt(`Selecciona tu arma para el round escribiendo el número correspondiente:

        0 - Rock
        1 - Paper
        2 - Scissors
        
        `),
            10
        );
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
