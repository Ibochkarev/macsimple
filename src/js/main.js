import $ from '../local_modules/jquery/dist/jquery.min'
window.$ = window.jQuery = require('jquery')

import { Swiper, Pagination, Mousewheel, Autoplay } from 'swiper'
Swiper.use([Pagination, Mousewheel, Autoplay])

import Bootstrap from '../../node_modules/bootstrap/dist/js/bootstrap.bundle'

$(document).ready(() => {
    const swiper = new Swiper('.reviews__slider', {
        centeredSlides: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        slidesPerView: 1,
        spaceBetween: 10,
        // Responsive breakpoints
        breakpoints: {
            // when window width is >= 480px
            575: {
                slidesPerView: 2,
                spaceBetween: 60,
            },
            // when window width is >= 640px
            992: {
                slidesPerView: 3,
                spaceBetween: 35,
            },
            1024: {
                spaceBetween: 130,
            },
        },
    })
})
