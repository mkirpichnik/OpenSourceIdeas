$(document).ready(function() {
    $('#fullpage').fullpage({
    	  anchors:['firstPage', 'secondPage'],
    	   keyboardScrolling: false,
    	   controlArrows: false,
    });

    $('#test').tagEditor({
        initialTags: ['Hello', 'World', 'Example', 'Tags'],
        delimiter: ', ', /* space and comma */
        placeholder: 'Enter tags ...'
    });
});