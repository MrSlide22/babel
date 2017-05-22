'use strict';

(function() {
    window.service.photo.getPhotos().then(function(responses) {
        var html = responses.reduce(function(total, response) {
            return total + '<li><h2>' + response.title + '</h2><p>' + response.body + '</p></li>';
        }, '');

        $('#movies').append(html);
    });
})();