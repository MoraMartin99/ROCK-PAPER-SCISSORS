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
    let choice;
    while (
        parseInt(choice, 10) < 0 ||
        parseInt(choice, 10) > 2 ||
        isNaN(parseInt(choice, 10))
    ) {
        choice =
            prompt(`Selecciona tu arma para el round escribiendo el número correspondiente:

        0 - Rock
        1 - Paper
        2 - Scissors
        
        `);
    }
    return choice;
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
