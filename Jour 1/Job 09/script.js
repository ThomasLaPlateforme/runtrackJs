function tri(numbers, order) {
    if (order === "asc") {
        numbers.sort(function(a, b) {
            return a - b;
        });
    } else if (order === "desc") {
        numbers.sort(function(a, b) {
            return b - a;
        });
    } else {
        console.log("L'ordre doit être 'asc' (ascendant) ou 'desc' (décroissant).");
    }
    return numbers;
}

var numbers = [4, 2, 7, 1, 9];
console.log(tri(numbers, "asc")); // Cela devrait afficher [1, 2, 4, 7, 9]
console.log(tri(numbers, "desc")); // Cela devrait afficher [9, 7, 4, 2, 1]
