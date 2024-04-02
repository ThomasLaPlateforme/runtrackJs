$(document).ready(function() {
    function shuffleImages() {
        var images = $("#rainbow img").get();
        images.sort(function() { return 0.5 - Math.random(); });
        $("#rainbow").empty().append(images);
    }

    $("#Button").click(function() {
        shuffleImages();
    });

    $("#rainbow").on("click", "img", function() {
        var nextImg = $(this).next("img");
        if(nextImg.length !== 0) {
            $(this).insertAfter(nextImg);
        } else {
            $(this).parent().prepend($(this));
        }
        checkOrder();
    });

    function checkOrder() {
        var order = $("#rainbow img").map(function() {
            return $(this).attr('src').split('/').pop();
        }).get();

        var expectedOrder = ["arc1.png", "arc2.png", "arc3.png", "arc4.png", "arc5.png", "arc6.png"];
        if(JSON.stringify(order) === JSON.stringify(expectedOrder)) {
            $("#Message").text("Vous avez gagné").css("color", "green");
        } else {
            $("#Message").text("Vous avez perdu").css("color", "red");
        }
    }
});