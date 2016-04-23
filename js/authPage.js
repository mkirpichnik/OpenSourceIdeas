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

     //$('#test').tagEditor({
     //    initialTags: ['Hello', 'World', 'Example', 'Tags'],
     //    delimiter: ', ', /* space and comma */
     //    placeholder: 'Enter tags ...'
     //});
});