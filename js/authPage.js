$(function () {
     $('.single-item').slick({
        dots: true,
        infinite: false,
        speed: 600
     });

     $('.news-slider').slick({
         dots: true,
         infinite: false,
         speed: 600,
         slidesToShow: 3,
         slidesToScroll: 3
     });
});