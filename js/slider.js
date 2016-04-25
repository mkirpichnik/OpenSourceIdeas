$(function () {
    $('.single-item').slick({
        dots: true,
        infinite: true,
        speed: 600
    });

    $('.news-slider').slick({
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 3
    });

    $(".news-next-btn").on('click', function () {
        $(".news-slider").slick("slickNext");
    });
});