// import $ from '../local_modules/jquery/dist/jquery.min'
// window.$ = window.jQuery = require('jquery')

import Inputmask from "inputmask";

// import AOS from "../../node_modules/aos/dist/aos"

import { Swiper, Pagination, Mousewheel, Autoplay, Thumbs, Navigation } from 'swiper'
Swiper.use([Pagination, Mousewheel, Autoplay, Thumbs, Navigation])

import Bootstrap from '../../node_modules/bootstrap/dist/js/bootstrap.bundle'

$(document).ready(() => {

  // AOS.init({
  //   duration: 700,
  //   easing: "ease-out-quad",
  //   once: !0,
  //   startEvent: "load",
  //   disable: window.innerWidth < 768,
  // })

  var swiper = new Swiper(".mySwiperThumb", {
    spaceBetween: 25,
    slidesPerView: 1,
    loop: true,
    freeMode: true,
    centeredSlides: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    dynamicBullets: true,
    slidesPerView: 'auto',
    pagination: {
        el: '.swiper-pagination2',
        clickable: true,
    },
    breakpoints: {
      // when window width is >= 992px
      575: {
        slidesPerView: 3,
        spaceBetween: 35,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 35,
      },
      // when window width is >= 1336px
      1336: {
        slidesPerView: 5,
        spaceBetween: 35
      },
      1600: {
        slidesPerView: 6,
      },
    },
  });

  var deviceSwiperPagination = new Swiper(".mySwiper", {
    spaceBetween: 10,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper,
    },
  });

  const reviewSlider = new Swiper('.reviews__slider', {
    centeredSlides: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    loop: true,
    // slidesPerView: 1,
    spaceBetween: 10,
    slidesPerView: 'auto',
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 575px
      575: {
        slidesPerView: 2,
        spaceBetween: 60,
      },
      // when window width is >= 992px
      992: {
        slidesPerView: 3,
        spaceBetween: 35,
      },
      // when window width is >= 1336px
      1336: {
        slidesPerView: 3,
        spaceBetween: 130
      },
    },
  })

  // Change name title device in modal
  let modalMaster = document.getElementById('modalMaster')
  modalMaster.addEventListener('show.bs.modal', function (event) {
    let button = event.relatedTarget
    let product = button.getAttribute('data-product')
    // modalMaster.querySelector('#device').value = product;
    modalMaster.querySelector('.product-name-in-modal').textContent = product;
  })

  var selector = document.getElementsByClassName("phone");
  Inputmask({"mask": "+7 (999) 999-9999", "clearIncomplete": true}).mask(selector);

  // Show more faq items
  $('.faq__more-btn').click(function() {
    $('.faq__item').removeClass('hidden');
    $('.faq__more-btn').hide();
  })
})
