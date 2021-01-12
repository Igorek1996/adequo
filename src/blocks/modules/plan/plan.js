$(function () {
    let screenWidth = $(window).width();
    if (screenWidth > 767) {
        $(".plan__list").matchHeight();
        $(".plan__text").matchHeight();
    }
})