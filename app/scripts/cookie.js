'use strict';

(function() {

    var cookiesAccepted = localStorage.getItem('cookie');

    if (cookiesAccepted) {
        hideCookiesVar();

    }

    var cookies = document.querySelector('.cookies button');
    cookies.addEventListener('click', function() {
        hideCookiesVar();
        localStorage.setItem('cookie', true);
    });

    function hideCookiesVar() {
        document.getElementsByClassName('cookies')[0].classList.add('ok');
    }
})();