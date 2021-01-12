$(function () {
    $(".js-header").sticky({
        zIndex: 60,
    });
    toggleMenu()
})
$(window).on('resize', () => {
    toggleMenu()
});

function toggleMenu() {
    let screenWidth = $(window).width();
    if (screenWidth > 767) {
        const $menu = $('.js-header__nav');

        $(document).mouseup(e => {
            if (!$menu.is(e.target) && $menu.has(e.target).length === 0) {
                $(".js-nav").removeClass('active');
            }
        });

        $('.js-burger').on('click', () => {
            $(".js-nav").toggleClass('active');
        });
    }
    else {
        $(".js-burger").click(function () {
            $(this).toggleClass("active");
            $(".js-nav").toggleClass("active");
            $("body").toggleClass("open");
        })

        $(".js-header__menu-link").click(function () {
            $(document).find(".js-burger").removeClass("active")
            $(".js-nav").removeClass("active");
            $("body").removeClass("open");
        })

        $(".js-arrow").click(function () {
            $(this).toggleClass("active");
            $(".js-menu").slideToggle();
        });
    }

}
