'use strict';

$(document).ready(function() {

    $('.nav-item a').on('click', function() {
        $(this).parent('li').parent('ul').parent('nav').removeClass('open');
    });

    $('.menu-btn').on('click', function() {

        if ($(this).parent('nav').hasClass('open')) {
            $(this).parent('nav').removeClass('open');
        } else {
            $(this).parent('nav').addClass('open');
        }
    });

});