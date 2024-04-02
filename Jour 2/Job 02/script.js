function showhide() {
    var container = document.getElementById("container");
    var article = document.getElementById("article");

    if (!article) {
        article = document.createElement("article");
        article.id = "article";
        article.textContent = "L'important n'est pas la chute, mais l'atterrissage.";
        container.appendChild(article);
    } else {
        container.removeChild(article);
    }
}
