var compteur = 0;
var compteurElement = document.getElementById("compteur");

function addOne() {
    compteur++;
    compteurElement.textContent = compteur;
}

document.getElementById("button").addEventListener("click", addOne);
