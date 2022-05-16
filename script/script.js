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
