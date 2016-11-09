var EventEmitter = require('eventemitter3');
var $ = require('jquery');

var favoritesStore = Object.create(EventEmitter.prototype);
EventEmitter.call(favoritesStore);

// Collection
var favorites = [];

favoritesStore.getFavorites = function () {
    return favorites;
};

favoritesStore.fetchFavorites = function () {
    $.ajax({
        url: '/api/favorites',
        success: function (response) {
            favorites = response;
            favoritesStore.emit('update');
        }
    });

    return favorites;
};

favoritesStore.addFavorite = function (name) {
    $.ajax({
        url: '/api/favorites',
        method: 'POST',
        data: {
            name: name
        },
        success: function (response) {
            favorites.push(response);
            favoritesStore.emit('update');
        }
    });
};

window.favoritesStore = favoritesStore;

module.exports = favoritesStore;
