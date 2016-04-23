$(document).ready(function() {
    $('#fullpage').fullpage({
    	  anchors:['firstPage', 'secondPage'],
    	   keyboardScrolling: false,
    	   controlArrows: false,
    });
    $("#myTags").tagit();

    $('#test').tagEditor({
        initialTags: ['Hello', 'World', 'Example', 'Tags'],
        delimiter: ', ', /* space and comma */
        placeholder: 'Enter tags ...'
    });
});