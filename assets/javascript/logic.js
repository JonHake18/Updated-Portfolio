$(document).ready(function () {
    $('.sidenav').sidenav();
    $('.modal').modal({
        ready: function () {
            $('.carousel.carousel-slider').carousel({
                fullWidth: true,
                indicators: true
            });
        }
    });

});