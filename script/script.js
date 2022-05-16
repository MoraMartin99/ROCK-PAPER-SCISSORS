/*  getWeapon retorna un string con la arma asignada a un index*/
function getWeapon(index) {
    let weapons = ["Rock", "Paper", "Scissors"];
    return typeof index !== "number" || index >= weapons.length
        ? undefined
        : weapons[index];
}
