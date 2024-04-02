function estNombrePremier(nombre) {
    if (nombre <= 1) {
        return false;
    }
    for (var i = 2; i <= Math.sqrt(nombre); i++) {
        if (nombre % i === 0) {
            return false;
        }
    }
    return true;
}

function sommeNombresPremiers(nombre1, nombre2) {
    if (estNombrePremier(nombre1) && estNombrePremier(nombre2)) {
        return nombre1 + nombre2;
    } else {
        return false;
    }
}

console.log(sommeNombresPremiers(3, 5)); // Cela devrait afficher 8 car 3 et 5 sont des nombres premiers.
console.log(sommeNombresPremiers(6, 7)); // Cela devrait afficher false car 6 n'est pas un nombre premier.
