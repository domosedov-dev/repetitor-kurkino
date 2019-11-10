import WOW from "wow.js";
import 'owl.carousel';
import * as DG from '2gis-maps';

$(function() {

    new WOW().init();
    DG.map('map', {
        center: [55.89, 37.39],
        zoom: 15,
        animate: true
    })
    $('.photos__slider > .owl-carousel').owlCarousel({
        items: 1,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        autoplaySpeed: 2000,
        loop: true,
        nav: true,
        navSpeed: 1000,
        navText: ['',''],
        navClass: ['slider-prev', 'slider-next'],
        navContainerClass: 'slider__nav',
        autoHeight:true,
        dots: false
    });

});




