$(function () {
    startCarousel();
})
function startCarousel() {
    let screenWidth = $(window).width();
    $(".reviews__slider-text").matchHeight({ byRow: false });
    $(".reviews__slider-title").matchHeight({ byRow: false });
    var owl = $('.js-reviews').owlCarousel({
        loop: false,
        margin: 24,
        navText: [`<svg width="28" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M.293 7.293a1 1 0 000 1.414l6.364 6.364a1 1 0 001.414-1.414L2.414 8l5.657-5.657A1 1 0 006.657.93L.293 7.293zM28 7H1v2h27V7z" /></svg>`, `<svg width="28" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M.293 7.293a1 1 0 000 1.414l6.364 6.364a1 1 0 001.414-1.414L2.414 8l5.657-5.657A1 1 0 006.657.93L.293 7.293zM28 7H1v2h27V7z" /></svg>`],
        dots: false,

        responsive: {
            0: {
                autoWidth: true,
            },
            768: {
                nav: false,
                autoWidth: true,
                items: 2,
            },
            1024: {
                autoWidth: false,
                items: 3,
                nav: true,

            }
        }
    })

    if (screenWidth > 1023) {
        $(".will-slide").removeClass("owl-carousel");
        $(".will-slide").trigger("destroy.owl.carousel");
    }
    else {
        $(".will-slide").addClass("owl-carousel");
        $(".will-slide").owlCarousel({
            autoplay: true,
            autoWidth: true,
            nav: false,
            navText: ["<div class='nav-btn prev'></div>", "<div class='nav-btn next'></div>"],
            loop: false,
            dots: false,
            margin: 0
        });
    }

    $('.owl-filter-bar').on('click', '.item', function (e) {
        e.preventDefault();
        var $item = $(this);
        var filter = $item.data('owl-filter')

        owl.owlcarousel2_filter(filter);
    })

    $(document).on("click", ".js-reviews__nav-item", function () {
        $(document).find(".js-reviews__nav-item").removeClass("active");
        $(this).addClass("active");
    })
}

$(window).on('resize', () => {
    startCarousel();
});

