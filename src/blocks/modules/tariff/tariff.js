$(function () {


    let screenWidth = $(window).width();
    let stepCount = $('.js-steps[data-step]').length;
    let stepNow = $('.js-steps[data-step].active').attr('data-step');
    let stepCoef = 100 / stepCount * stepNow;


    $(document).find(".js-step-count").text(stepCount);



    $(document).on("click", ".js-start-btn", function (e) {
        e.preventDefault();
        $(document).find(".js-tariff__start").removeClass("active");
    })
    $(document).on("click", ".js-to-start", function (e) {
        e.preventDefault();
        $(document).find(".js-tariff__start").addClass("active");
    })
    $(document).on("click", ".js-tariff__form-radiobox input", function () {
        let radioVal = $(this).val();
        $(document).find(".js-tariff__stage[data-step=" + stepNow + "]").find(".js-tariff__stage-value").text(radioVal);
        $(document).find(".js-tariff__stage[data-step=" + stepNow + "]").addClass("active");
        if (screenWidth < 768) {
            $(this).closest(".js-steps").find(".js-next-step").trigger("click");
        }
    })


    $(document).on("click", ".js-back-step", function () {
        let screenWidth = $(window).width();
        if (screenWidth < 768) {
            $(this).closest(".js-steps").find(".js-prev-step").trigger("click");
        }
    })

    $(document).on("click", ".js-tariff-btn", function (e) {
        e.preventDefault();
        let btnToStep = $(this).attr('data-to-step');
        $(document).find(".js-steps").removeClass("active");
        $(document).find(".js-steps[data-step=" + (btnToStep) + "]").addClass("active");
        stepNow = btnToStep;
        $(document).find(".js-step-current").text(stepNow);
        let progressWidth = stepCoef * stepNow + '%';
        $(document).find(".js-tariff__stage[data-step=" + stepNow + "]").find(".js-tariff__stage-name").addClass("active");

        $(document).find('.js-step-progress').css('width', progressWidth);
    })

    $(document).on("click", ".js-to-finish", function (e) {
        e.preventDefault();
        $(document).find(".js-tariff__finish").addClass("active");
        $(document).find(".js-steps").removeClass("active");

        if (screenWidth < 768) {
            $(document).find(".js-tariff__container").css("display", "none");
            setTimeout(function () {
                $(document).find(".js-tariff__container").css("display", "block");

            }, 3000)
        }

        setTimeout(function () {
            $(document).find(".js-tariff__finish").removeClass("active");
            $(document).find(".js-tariff__start").addClass("active");
            $(document).find(".js-steps[data-step=" + 1 + "]").addClass("active");
        }, 3000);
    })
    /* */


});