$(function () {
    $(".suits__item-title").matchHeight();
    const width = $(window).width();
    startCarousel();
})
function startCarousel() {
    const width = $(window).width();
    var owl = $(".js-suits");
    if (width > 767) {
        if (typeof owl.data('owl.carousel') != 'undefined') {
            owl.data('owl.carousel').destroy();
        }
        owl.removeClass('owl-carousel');
    }
    else {
        owl.addClass('owl-carousel');
        owl.owlCarousel({
            dragEndSpeed: 300,
            dotsSpeed: 300,
            navSpeed: 300,
            loop: false,
            navText: [`<svg width="28" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M.293 7.293a1 1 0 000 1.414l6.364 6.364a1 1 0 001.414-1.414L2.414 8l5.657-5.657A1 1 0 006.657.93L.293 7.293zM28 7H1v2h27V7z" /></svg>`, `<svg width="28" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M.293 7.293a1 1 0 000 1.414l6.364 6.364a1 1 0 001.414-1.414L2.414 8l5.657-5.657A1 1 0 006.657.93L.293 7.293zM28 7H1v2h27V7z" /></svg>`],
            touchDrag: true,
            dots: false,
            items: 1,
            margin: 10,
        });
    }
}

$(window).resize(startCarousel);	
