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
            url: this.root + '/photos/' + id
        });
    }

    function getPhotos() {
        return $.ajax({
            type: 'GET',
            dataType: 'json',
            url: this.root + '/photos?_limit=2'
        });
    }

    function createPhoto(data) {
        return $.ajax({
            type: 'POST',
            contentType: 'application/json; charset=utf-8',
            url: this.root + '/photos',
            data: JSON.stringify(data)
        });
    }

    function updatePhoto(data) {
        return $.ajax({
            type: 'PUT',
            contentType: 'application/json; charset=utf-8',
            url: this.root + '/photos/' + id,
            data: JSON.stringify(data)
        });
    }

    function deletePhoto(data) {
        return $.ajax({
            type: 'DELETE',
            url: this.root + '/photos/' + id
        });
    }

    window.service = window.service || {};
    window.service.photo = service;
})();
