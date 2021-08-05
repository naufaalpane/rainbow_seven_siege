function myFunction() {
    var x = document.getElementById("myTopnav");

    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

$(document).ready(function () {
    $('.next').on('click', function () {
        var currentImg = $('.activate');
        var nextImg = currentImg.next();

        if (nextImg.length) {
            currentImg.removeClass('activate').css('z-index', -10);
            nextImg.addClass('activate').css('z-index', 10);
        }
    });

    $('.prev').on('click', function () {
        var currentImg = $('.activate');
        var prevImg = currentImg.prev();

        if (prevImg.length) {
            currentImg.removeClass('activate').css('z-index', -10);
            prevImg.addClass('activate').css('z-index', 10);
        }
    });
});