$(function () {
    startCarousel();
})
function startCarousel() {
    const width = $(window).width();

    $(".js-partners").owlCarousel({
        dragEndSpeed: 300,
        dotsSpeed: 300,
        navSpeed: 300,
        loop: false,
        navText: [`<svg width="28" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M.293 7.293a1 1 0 000 1.414l6.364 6.364a1 1 0 001.414-1.414L2.414 8l5.657-5.657A1 1 0 006.657.93L.293 7.293zM28 7H1v2h27V7z" /></svg>`, `<svg width="28" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M.293 7.293a1 1 0 000 1.414l6.364 6.364a1 1 0 001.414-1.414L2.414 8l5.657-5.657A1 1 0 006.657.93L.293 7.293zM28 7H1v2h27V7z" /></svg>`],
        touchDrag: true,
        dots: false,
        responsive: {
            0: {
                autoWidth: true,
                margin: 10,
                nav: false,
            },
            768: {
                nav: true,
                autoWidth: false,
                items: 3,
                margin: 30,
            },
            1024: {
                nav: true,
                autoWidth: false,
                items: 4,
                margin: 40,
            },
            1280: {
                nav: true,
                autoWidth: false,
                items: 4,
                margin: 56,
            }
        }
    });
}

$(window).on('resize', () => {
    startCarousel();
});

