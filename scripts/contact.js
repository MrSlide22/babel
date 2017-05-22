'use strict';

(function() {

    initForm();

    function validateForm() {
        var inputs = $('#contact input, #contact textarea');

        var validity = [];
        inputs.each(function(index, elem) {
            validity.push(elem.checkValidity());
        });

        return validity.reduce(function(total, value) {
            return total && value;
        }, true);
    }

    validateForm();

    var button = document.querySelector('#contact button').addEventListener('click', function(evt) {
        evt.preventDefault();

        console.log('asdf');
        sessionStorage.setItem('name', $('input[name="name"]').val());
        sessionStorage.setItem('email', $('input[name="email"]').val());
        sessionStorage.setItem('gender', $('input[name="gender"]:checked').val());
        sessionStorage.setItem('birthdate', $('input[name="birthdate"]').val());

        var result = validateForm();
    });

    function initForm() {

        if (sessionStorage.getItem('name')) {
            $('#name').val(sessionStorage.getItem('name'));
        }

        if (sessionStorage.getItem('email')) {
            $('#email').val(sessionStorage.getItem('email'));
        }

        if (sessionStorage.getItem('gender')) {
            $('#' + sessionStorage.getItem('gender')).attr('checked', 'checked');
        }

        if (sessionStorage.getItem('birthdate')) {
            $('#birthdate').val(sessionStorage.getItem('birthdate'));
        }
    }
})();