/*
header > hamburger-menu
------------------------------------------ */
const hamburger = $('.js-header__hamburger-menu');
const body = $('.js-body');

$('.js-header__hamburger-button').on('click', function () {
    hamburger.toggleClass('js-header__hamburger-menu-active');
    body.toggleClass('is-overflow');
});

$(window).on('resize', function () {
    hamburger.removeClass('js-header__hamburger-menu-active');
    body.removeClass('is-overflow');
});

$('.js-header__hamburger-menu a[href^="#"]').on('click', function () {
    hamburger.removeClass('js-header__hamburger-menu-active');
    body.removeClass('is-overflow');
});

