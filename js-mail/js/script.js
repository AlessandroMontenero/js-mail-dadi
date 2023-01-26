/* Chiedi all'utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull'esito del controllo.
 */

const emails = ["alemonte99@icloud.com", "pincopallo@gmail.com"]

/* Inserisco nuova mail nell'array */
document.getElementById("addMail").onclick = function addMail () {
 arrayLenght = emails.length
 emails[arrayLenght] = (document.getElementById("email").value)
 console.log(emails)
}

/* controllo che la mail sia presente nell'array */

    /* Variabile di controllo */
let x = false

document.getElementById("login").onclick = function tryLogin() {
    for (let i = 0; i <= emails.length; i++) {
        if (document.getElementById("emailVerification").value == emails[i]) {
            x = true
        }
        else {
            console.log(x)
        }
    }

    if (x == true) {
        document.getElementById("subscriptionVerification").innerHTML = "utente iscritto"
    }
    else {
        document.getElementById("subscriptionVerification").innerHTML = "utente non iscritto"
    }

    x = false
}