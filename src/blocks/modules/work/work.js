$(function () {
    startCarousel();
})
function startCarousel() {
    const width = $(window).width();

    $(".js-work").owlCarousel({
        dragEndSpeed: 300,
        dotsSpeed: 300,
        navSpeed: 300,
        loop: false,
        touchDrag: true,
        dots: false,
        autoWidth: true,
        margin: 0,
        responsive: {
            1024: {
                mouseDrag: true,
                touchDrag: true,
            },
            1440: {
                mouseDrag: false,
                touchDrag: false,
            }
        }
    });
}

$(window).on('resize', () => {
    startCarousel();
});

