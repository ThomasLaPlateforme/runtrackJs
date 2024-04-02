function bisextile(annee) {
    if ((annee % 4 === 0 && annee % 100 !== 0) || annee % 400 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(bisextile(2024)); // Cela devrait afficher true car 2024 est bissextile.
console.log(bisextile(2023)); // Cela devrait afficher false car 2023 n'est pas bissextile.
