$(function () {
    $('.btn-tooltip').tooltip();
    $('.btn-save').on('click', function () {
        $('.notification-save').fadeIn();
    });
    $('.btn-cancel').on('click', function () {
        $('.notification-cancel').fadeIn();
    });
});