'use strict';

(function() {
    window.service.photo.getPhotos({
        limit: document.getElementById('movies').dataset.length
    }).then(function(responses) {
        var html = responses.reduce(function(total, response) {
            return total +
                '<article class="col-lg-3 col-md-4 col-sm-6"><img class="col-xs-12" src="' +
                response.url + '"><h3>' +
                response.title +
                '</h3></article>';
        }, '');

        $('#movies div').append(html);
    });
})();