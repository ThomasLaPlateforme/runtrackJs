var keylogger = document.getElementById("keylogger");

document.addEventListener("keydown", function(event) {
    var lettre = event.key.toLowerCase(); // Convertir en minuscule pour être sûr

    if (lettre.match(/[a-z]/)) {

        if (document.activeElement === keylogger) {
            keylogger.value += lettre + lettre;
        } else {
            keylogger.value += lettre;
        }
    }
});
