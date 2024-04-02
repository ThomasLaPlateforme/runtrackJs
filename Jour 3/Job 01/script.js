// Sélectionner le bouton d'affichage et ajouter un gestionnaire d'événement pour afficher le texte
document.getElementById('showButton').addEventListener('click', function() {
    var citation = document.getElementById('citation');
    citation.style.display = 'block'; // Afficher l'élément
});

// Sélectionner le bouton de masquage et ajouter un gestionnaire d'événement pour cacher le texte
document.getElementById('hideButton').addEventListener('click', function() {
    var citation = document.getElementById('citation');
    citation.style.display = 'none'; // Cacher l'élément
});
