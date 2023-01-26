/* Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto. */

/* JS - DICE */
document.getElementById("playGame").onclick = function playGame () {
    
    /* creo due numeri casuali da 1 a 6 */
    let userNumber = Math.round(Math.random() * 5) + 1
    let cpuNumber = Math.round(Math.random() * 5) + 1
    
    /* pulisco inner e classi dei due dice */
    document.getElementById("userDice").innerHTML = ""
    document.getElementById("userDice").className = "dice"
    document.getElementById("cpuDice").innerHTML = ""
    document.getElementById("cpuDice").className = "dice"

    userDice = document.getElementById("userDice")
    cpudDice = document.getElementById("cpuDice")

    
    /* controllo chi ha vinto */
    if (userNumber > cpuNumber) {
        userDice.classList.add("winner")
        document.getElementById("result").innerHTML = "L'utente ha vinto"
    }
    
    else if (userNumber < cpuNumber) {
        cpuDice.classList.add("winner")
        document.getElementById("result").innerHTML = "Il computer ha vinto"
    }
    
    else {
        document.getElementById("result").innerHTML = "Pareggio"
    }
    
    /* creo dot e assegno classi all'interno dei due dice*/
    if (cpuNumber == 1) {
        cpuDice.classList.add("first-face")
        document.getElementById("cpuDice").innerHTML += '<div class="dot"></div>'
    }
    else if (cpuNumber == 2) {
        cpuDice.classList.add("second-face")
        document.getElementById("cpuDice").innerHTML += '<div class="dot"></div>'
        document.getElementById("cpuDice").innerHTML += '<div class="dot"></div>'
    }
    else if (cpuNumber == 3) {
        cpuDice.classList.add("third-face")
        document.getElementById("cpuDice").innerHTML += '<div class="dot"></div>'
        document.getElementById("cpuDice").innerHTML += '<div class="dot"></div>'
        document.getElementById("cpuDice").innerHTML += '<div class="dot"></div>'

    }
    else if (cpuNumber == 4) {
        cpuDice.classList.add("fourth-face")
        document.getElementById("cpuDice").innerHTML += '<div class="column" id="cpuDiceContainer"></div>'
        document.getElementById("cpuDiceContainer").innerHTML += '<div class="dot"></div>'
        document.getElementById("cpuDiceContainer").innerHTML += '<div class="dot"></div>'
        document.getElementById("cpuDice").innerHTML += '<div class="column" id="cpuDiceContainer 2"></div>'
        document.getElementById("cpuDiceContainer 2").innerHTML += '<div class="dot"></div>'
        document.getElementById("cpuDiceContainer 2").innerHTML += '<div class="dot"></div>'
    }
    else if (cpuNumber == 5) {
        cpuDice.classList.add("fifth-face")
        document.getElementById("cpuDice").innerHTML += '<div class="column" id="cpuDiceContainer"></div>'
        document.getElementById("cpuDiceContainer").innerHTML += '<div class="dot"></div>'
        document.getElementById("cpuDiceContainer").innerHTML += '<div class="dot"></div>'
        document.getElementById("cpuDice").innerHTML += '<div class="column alignCenter" id="cpuDiceContainer 2"></div>'
        document.getElementById("cpuDiceContainer 2").innerHTML += '<div class="dot"></div>'
        document.getElementById("cpuDice").innerHTML += '<div class="column" id="cpuDiceContainer 3"></div>'
        document.getElementById("cpuDiceContainer 3").innerHTML += '<div class="dot"></div>'
        document.getElementById("cpuDiceContainer 3").innerHTML += '<div class="dot"></div>'
    }

    else if (cpuNumber == 6) {
        cpuDice.classList.add("sixth-face")
        document.getElementById("cpuDice").innerHTML += '<div class="column" id="cpuDiceContainer"></div>'
        document.getElementById("cpuDiceContainer").innerHTML += '<div class="dot"></div>'
        document.getElementById("cpuDiceContainer").innerHTML += '<div class="dot"></div>'
        document.getElementById("cpuDice").innerHTML += '<div class="column" id="cpuDiceContainer 2"></div>'
        document.getElementById("cpuDiceContainer 2").innerHTML += '<div class="dot"></div>'
        document.getElementById("cpuDiceContainer 2").innerHTML += '<div class="dot"></div>'
        document.getElementById("cpuDice").innerHTML += '<div class="column" id="cpuDiceContainer 3"></div>'
        document.getElementById("cpuDiceContainer 3").innerHTML += '<div class="dot"></div>'
        document.getElementById("cpuDiceContainer 3").innerHTML += '<div class="dot"></div>'
    }

    if (userNumber == 1) {
        userDice.classList.add("first-face")
        document.getElementById("userDice").innerHTML += '<div class="dot"></div>'
    }
    else if (userNumber == 2) {
        userDice.classList.add("second-face")
        document.getElementById("userDice").innerHTML += '<div class="dot"></div>'
        document.getElementById("userDice").innerHTML += '<div class="dot"></div>'
    }
    else if (userNumber == 3) {
        userDice.classList.add("third-face")
        document.getElementById("userDice").innerHTML += '<div class="dot"></div>'
        document.getElementById("userDice").innerHTML += '<div class="dot"></div>'
        document.getElementById("userDice").innerHTML += '<div class="dot"></div>'

    }
    else if (userNumber == 4) {
        userDice.classList.add("fourth-face")
        document.getElementById("userDice").innerHTML += '<div class="column" id="userDiceContainer"></div>'
        document.getElementById("userDiceContainer").innerHTML += '<div class="dot"></div>'
        document.getElementById("userDiceContainer").innerHTML += '<div class="dot"></div>'
        document.getElementById("userDice").innerHTML += '<div class="column" id="userDiceContainer 2"></div>'
        document.getElementById("userDiceContainer 2").innerHTML += '<div class="dot"></div>'
        document.getElementById("userDiceContainer 2").innerHTML += '<div class="dot"></div>'
    }
    else if (userNumber == 5) {
        userDice.classList.add("fifth-face")
        document.getElementById("userDice").innerHTML += '<div class="column" id="userDiceContainer"></div>'
        document.getElementById("userDiceContainer").innerHTML += '<div class="dot"></div>'
        document.getElementById("userDiceContainer").innerHTML += '<div class="dot"></div>'
        document.getElementById("userDice").innerHTML += '<div class="column alignCenter" id="userDiceContainer 2"></div>'
        document.getElementById("userDiceContainer 2").innerHTML += '<div class="dot"></div>'
        document.getElementById("userDice").innerHTML += '<div class="column" id="userDiceContainer 3"></div>'
        document.getElementById("userDiceContainer 3").innerHTML += '<div class="dot"></div>'
        document.getElementById("userDiceContainer 3").innerHTML += '<div class="dot"></div>'
    }

    else if (userNumber == 6) {
        userDice.classList.add("sixth-face")
        document.getElementById("userDice").innerHTML += '<div class="column" id="userDiceContainer"></div>'
        document.getElementById("userDiceContainer").innerHTML += '<div class="dot"></div>'
        document.getElementById("userDiceContainer").innerHTML += '<div class="dot"></div>'
        document.getElementById("userDice").innerHTML += '<div class="column" id="userDiceContainer 2"></div>'
        document.getElementById("userDiceContainer 2").innerHTML += '<div class="dot"></div>'
        document.getElementById("userDiceContainer 2").innerHTML += '<div class="dot"></div>'
        document.getElementById("userDice").innerHTML += '<div class="column" id="userDiceContainer 3"></div>'
        document.getElementById("userDiceContainer 3").innerHTML += '<div class="dot"></div>'
        document.getElementById("userDiceContainer 3").innerHTML += '<div class="dot"></div>'
    }
}