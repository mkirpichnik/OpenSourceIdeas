$(function () {
    $('.idea-tags').tagEditor({
        initialTags: ['#tag', '#tag', '#tag', '#tag'],
         delimiter: ', ', /* space and comma */
         placeholder: 'Enter tags ...'
    });

    //var tags = $('.tag-editor-tag');

    //for (var tag in tags) {
    //    $(tags[tag]).addClass('tag');
    //}

});