// AOS initialisation
AOS.init();

$(document).ready(function(){

     // Variable pour suivre l'état de lecturevar owl = $('#hero-slider'); var isPlaying = true;
    // hero slider
    $('#hero-slider').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        items: 1,
        dots: false,
        smartSpeed: 1000,
        autoplay:true,
        autoplayTimeout:5000,  
        autoplayHoverPause:false,
        navText: ['<<','>>'],
        responsive:{
            0:{
                nav:false,
            },
            768:{
                nav: true,
            }
        }
    });

    // Gestionnaire d'événement pour le bouton "Play/Pause"
    /* $('#play-pause-button').on('click', function() {
        if (isPlaying) {
            owl.trigger('stop.owl.autoplay'); // Mettre en pause la lecture du carousel
            $('#play-pause-button i').removeClass('fa-pause').addClass('fa-play'); // Mettre à jour l'icône du bouton
        } else {
            owl.trigger('play.owl.autoplay', [5000]); // Reprendre la lecture avec une durée de défilement de 1000ms
            $('#play-pause-button i').removeClass('fa-play').addClass('fa-pause'); // Mettre à jour l'icône du bouton
        }
        isPlaying = !isPlaying; // Inverser l'état de lecture
    }); */
    

    // project slider
    $('#project-slider').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        dots: false,
        smartSpeed: 1000,
        autoplay:true,
        autoplayTimeout:5000,  
        autoplayHoverPause:false,
        margin: 24,
        responsive: {
            0: {
                items: 1,
                nav:false,
                margin: 0,
            },
            768: {
                items: 2,
            },
            1140: {
                items: 2,
                center: true,
                dots: true,
            }
        }
    });

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: true,
        smartSpeed: 1000,
        autoplay:true,
        autoplayTimeout:5000,  
        autoplayHoverPause:false,
        margin: 24,
        responsive: {
            0: {
                items: 1,
                nav:false,
                margin: 0,
            },
            768: {
                items: 2,
            },
            1140: {
                items: 2,
                dots: true,
            }
        }
    });

});




