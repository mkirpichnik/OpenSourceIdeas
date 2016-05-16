$(function () {
    $('.idea-tags').tagEditor({
        initialTags: ['#Open Source', '#Free','#Users', '#Perspective', '#Online'],
         delimiter: ', ', /* space and comma */
         placeholder: 'Enter tags ...'
    });

    $('.idea-tags-empty').tagEditor({
        delimiter: ', ', /* space and comma */
        placeholder: 'Enter tags ...'
    });
    

    //var tags = $('.tag-editor-tag');

    //for (var tag in tags) {
    //    $(tags[tag]).addClass('tag');
    //}

});