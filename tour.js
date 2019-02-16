$(document).ready(function () {
    'use strict';

    // Sliders

    let config = {
        pager: false,   // Retirer les boutons sous le slider 
        controls: false,  // Retirer les fleches dans le slider
        wrapperClass: 'slider-wrapper' // Renommer le slider afin d'éviter le style par défaut du plugin
    };

    // Applique la fonction aux deux slider de la page
    initSlider('slider-start', config);
    initSlider('slider-blog', config);


    // fonction qui récupère le slider via son id, ainsi que les flèches correspondantes

    function initSlider(slider_name, config) {
        let $slider = $('#' + slider_name + ' .slider');
        let $left_arrow = $('#' + slider_name + ' .left-arrow');
        let $right_arrow = $('#' + slider_name + ' .right-arrow');

        $slider.bxSlider(config);

        $left_arrow.on('click', function (event) {
            event.preventDefault();
            $slider.goToPrevSlide();
        });

        $right_arrow.on('click', function (event) {
            event.preventDefault();
            $slider.goToNextSlide();
        });
    }


}); //Fin $(document).ready

let isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
if (!isChrome) {
    $('#iframeAudio').remove()
}
else {
    $('#playAudio').remove()
    //just to make sure that it will not have 2x audio in the background 
}