$(function () {
    showTab()
})
$(window).on('resize', () => {
    showTab()
});

function showTab() {
    $(".js-how__item-data").click(function () {
        let screenWidth = $(window).width();

        if (screenWidth < 768) {

            $(".js-how__item-data").removeClass("active")
            $(this).toggleClass("active");
        }
        else {
            $(".js-how__item-data").removeClass("active");
            $(this).addClass("active");
        }
    })
}

