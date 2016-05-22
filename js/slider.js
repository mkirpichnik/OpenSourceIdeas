$(function () {
    $('.single-item').slick({
        dots: true,
        infinite: true,
        speed: 600
    });

    $('.news-slider').slick({
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 3
    });

    $("#next-slider").on('click', function () {
        $(".news-slider").slick("slickNext");
    });

    $("#prev-slider").on('click', function () {
        $(".news-slider").slick("slickPrev");
    });
});