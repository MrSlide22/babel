'use strict';

(function() {

    var data = {
        'userId': 1,
        'title': 'My post',
        'body': 'post body'
    };

    var service = {
        root: 'https://jsonplaceholder.typicode.com',
        getPhoto: getPhoto,
        getPhotos: getPhotos,
        createPhoto: createPhoto,
        updatePhoto: updatePhoto,
        deletePhoto: deletePhoto
    };

    function getPhoto(id) {
        return $.ajax({
            type: 'GET',
            dataType: 'json',
            url: service.root + '/photos/' + id
        });
    }

    function getPhotos(params) {

        params = params || {};
        params.limit = params.limit || 2;
        return $.ajax({
            type: 'GET',
            dataType: 'json',
            url: service.root + '/photos?_limit=' + params.limit
        });
    }

    function createPhoto(data) {
        return $.ajax({
            type: 'POST',
            contentType: 'application/json; charset=utf-8',
            url: service.root + '/photos',
            data: JSON.stringify(data)
        });
    }

    function updatePhoto(data) {
        return $.ajax({
            type: 'PUT',
            contentType: 'application/json; charset=utf-8',
            url: service.root + '/photos/' + data.id,
            data: JSON.stringify(data)
        });
    }

    function deletePhoto(data) {
        return $.ajax({
            type: 'DELETE',
            url: service.root + '/photos/' + data.id
        });
    }

    window.service = window.service || {};
    window.service.photo = service;
})();