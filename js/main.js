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

    $("#passwordfield").on("keyup", function () {
        if ($(this).val())
            $(".password .glyphicon-eye-open").show();
        else
            $(".password .glyphicon-eye-open").hide();
    });
    $(".password .glyphicon-eye-open").mousedown(function () {
        $("#passwordfield").attr('type', 'text');
    }).mouseup(function () {
        $("#passwordfield").attr('type', 'password');
    }).mouseout(function () {
        $("#passwordfield").attr('type', 'password');
    });

    $("#confirmPasswordfield").on("keyup", function () {
        if ($(this).val())
            $(".confirmPassword .glyphicon-eye-open").show();
        else
            $(".confirmPassword .glyphicon-eye-open").hide();
    });
    

    $("#loginPasswordfield").on("keyup", function () {
        if ($(this).val())
            $(".loginPassword .glyphicon-eye-open").show();
        else
            $(".loginPassword .glyphicon-eye-open").hide();
    });
    $(".loginPassword .glyphicon-eye-open").mousedown(function () {
        $("#loginPasswordfield").attr('type', 'text');
    }).mouseup(function () {
        $("#loginPasswordfield").attr('type', 'password');
    }).mouseout(function () {
        $("#loginPasswordfield").attr('type', 'password');
    });
});