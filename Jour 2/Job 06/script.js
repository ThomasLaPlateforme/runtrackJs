// Code Konami
var konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a', 'Enter'];
var konamiIndex = 0;

document.addEventListener('keydown', function(event) {
    // Vérifier si la touche enfoncée correspond à la prochaine dans le code Konami
    if (event.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        
        // Si l'index atteint la longueur du code Konami, cela signifie que le code a été saisi correctement
        if (konamiIndex === konamiCode.length) {
            applyLaPlateformeStyles(); // Appliquer les styles de La Plateforme_
            konamiIndex = 0; // Réinitialiser l'index pour permettre la saisie ultérieure du code
        }
    } else {
        konamiIndex = 0; // Réinitialiser l'index si une touche incorrecte est pressée
    }
});

// Fonction pour appliquer les styles de La Plateforme_
function applyLaPlateformeStyles() {
    document.body.classList.add('la-plateforme'); // Ajouter la classe pour les styles spécifiques de La Plateforme_
}
