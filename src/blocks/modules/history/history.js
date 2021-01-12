$(function () {
    startCarousel();
})
function startCarousel() {
    const width = $(window).width();

    $(".js-history").owlCarousel({
        autoplay: false,
        autoplaySpeed: 300,
        autoplayTimeout: 6000,
        autoplayHoverPause: true,
        dragEndSpeed: 300,
        dotsSpeed: 300,
        navSpeed: 300,
        loop: false,
        nav: true,
        navText: [`<svg width="28" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M.293 7.293a1 1 0 000 1.414l6.364 6.364a1 1 0 001.414-1.414L2.414 8l5.657-5.657A1 1 0 006.657.93L.293 7.293zM28 7H1v2h27V7z" /></svg>`, `<svg width="28" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M.293 7.293a1 1 0 000 1.414l6.364 6.364a1 1 0 001.414-1.414L2.414 8l5.657-5.657A1 1 0 006.657.93L.293 7.293zM28 7H1v2h27V7z" /></svg>`],
        touchDrag: true,
        dots: false,
        margin: 30,
        items: 1,
        onTranslated: callback,
        onInitialized: callback,
    });
    function callback(event) {
        var items = event.item.count;
        var item = event.item.index + 1;

        $(document).find(".js-index").text(item);
        $(document).find(".js-count").text(items);
    }
}

$(window).on('resize', () => {
    startCarousel();
});

