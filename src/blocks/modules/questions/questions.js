$(function () {
    let screenWidth = $(window).width();
    if ($(".map")[0]) {
        ymaps.ready(function () {
            var myMap = new ymaps.Map('map', {
                center: [55.695326, 38.181176],
                // center: [55.647505, 37.623119],
                zoom: 11,
            }, {
                searchControlProvider: 'yandex#search'
            }),

                // Создаём макет содержимого.
                MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
                    '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
                ),


                myPlacemark = new ymaps.Placemark([55.695326, 38.181176], {
                }, {
                    iconLayout: 'default#image',
                    iconImageHref: '../img/svg/marker.svg',
                    iconImageSize: [43, 60],
                    iconImageOffset: [0, 0],
                    iconContentOffset: [0, 0]
                });

            myMap.geoObjects
                .add(myPlacemark)

            myPlacemark.events.add("click", function () {
                var currentAdress = [
                    "ул. 1-я Владимирская, дом 12А, корпус 2, 1 этаж",
                    "Станция метро “Перово”",
                    "Офис работает с 9:00 - 21:00",
                    "+7 (495) 215-03-43"
                ];
                myPlacemark.options.set("iconImageHref", "../img/svg/marker.svg");
                myPlacemark.options.set("iconImageSize", [43, 60]);
            });

            if (screenWidth < 768) {
                myPlacemark.options.set("iconImageSize", [50, 50]);
                myPlacemark.options.set("iconImageOffset", [0, 0]);
            }
        });
    };
})