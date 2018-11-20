$(document).ready(function () {

  $('.header__menu').on('click', function () {
    $('.services--menu').toggleClass('services--menu--active');
    $('.menu__text').toggleClass('menu__text--active');
    $('.menu__close').toggleClass('menu__close--active');
    $('.menu__img').toggleClass('menu__img--active');
    $('.menu__plus').toggleClass('menu__plus--active');
  });

  $('.hero__slider').slick({
    arrows: false
  });
});