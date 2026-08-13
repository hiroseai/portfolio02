/*
header > hamburger-menu
------------------------------------------ */
const hamburger = $('.js-header__hamburger-menu');
const body = $('.js-body'); // ★bodyタグを操作するために追加

$('.js-header__hamburger-button').on('click', function () {
    hamburger.toggleClass('js-header__hamburger-menu-active');
    body.toggleClass('is-overflow'); // ★メニューの開閉に合わせてbodyの固定を切り替え
});

$(window).on('resize', function () {
    hamburger.removeClass('js-header__hamburger-menu-active');
    body.removeClass('is-overflow'); // ★bodyの固定を強制解除
});

$('.js-header__hamburger-menu a[href^="#"]').on('click', function () {
    hamburger.removeClass('js-header__hamburger-menu-active');
    body.removeClass('is-overflow'); // ★ページ内スクロールが始まる前にbodyの固定を解除
});

/*
header > transform
------------------------------------------ */
$(function () {
    $(window).on("scroll", function () {
        const headerHeight = $(".js-header").outerHeight();
        const kvHeight = $(".js-kv").height();
        if ($(this).scrollTop() >= kvHeight - headerHeight) {
            $(".js-header").addClass("transform");
        } else {
            $(".js-header").removeClass("transform");
        }
    });
});