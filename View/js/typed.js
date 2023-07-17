document.addEventListener("DOMContentLoaded", function() {
    var typedText = document.querySelector('.typed-text');

    var options = {
        strings: ["Ne perdez plus de temps, contactez-nous dès maintenant pour résoudre tous vos problèmes informatiques et optimiser votre productivité."],
        typeSpeed: 30,
        loop: true,
    };

    var typed = new Typed(typedText, options);
});