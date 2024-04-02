function jourTravaille(date) {
    var annee = date.getFullYear();
    var mois = date.getMonth() + 1;
    var jour = date.getDate();

    //Liste des jours fériés en 2024
    var joursFeries = [
        "2024-01-01", //Nouvel An
        "2024-04-01", //Lundi de Pâques
        "2024-05-01", //Fête du Travail
        "2024-05-08", //Victoire des Alliés
        "2024-05-30", //Ascension
        "2024-06-10", //Lundi de Pentecôte
        "2024-07-14", //Fête nationale
        "2024-08-15", //Assomption
        "2024-11-01", //Toussaint
        "2024-11-11", //Armistice
        "2024-12-25"  //Noël
    ];

    var jourFerie = joursFeries.includes(`${annee}-${mois.toString().padStart(2, '0')}-${jour.toString().padStart(2, '0')}`);

    //Vérification si c'est un samedi ou dimanche
    var jourSemaine = date.getDay(); 

    if (jourFerie) {
        console.log(`Le ${jour}/${mois}/${annee} est un jour férié.`);
    } else if (jourSemaine === 0 || jourSemaine === 6) {
        console.log(`Non, le ${jour}/${mois}/${annee} est un week-end.`);
    } else {
        console.log(`Oui, le ${jour}/${mois}/${annee} est un jour travaillé.`);
    }
}

var date = new Date(2024, 0, 1); // 1er janvier 2024
jourTravaille(date);
