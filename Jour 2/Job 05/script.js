document.addEventListener("scroll", function() {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop; // Pour obtenir la position de défilement en fonction du navigateur
    var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight; // Pour obtenir la hauteur totale de la page en fonction du navigateur
    var clientHeight = document.documentElement.clientHeight || window.innerHeight; // Pour obtenir la hauteur de la fenêtre visible en fonction du navigateur

    var scrollPercent = (scrollTop / (scrollHeight - clientHeight)) * 100; // Calcul du pourcentage de défilement

    var footer = document.querySelector("footer");
    var color = "rgb(" + Math.floor(scrollPercent * 2.55) + ", " + Math.floor((100 - scrollPercent) * 2.55) + ", 100)"; // Calcul de la couleur en fonction du pourcentage de défilement

    footer.style.backgroundColor = color; // Changement de la couleur du footer en fonction du pourcentage de défilement
});
