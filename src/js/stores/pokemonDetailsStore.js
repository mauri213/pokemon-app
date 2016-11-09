
var EventEmitter = require('eventemitter3');
var $ = require('jquery');

var pokemonDetailsStore = Object.create(EventEmitter.prototype);
EventEmitter.call(pokemonDetailsStore);

// Collection
var pokemon = {};

pokemonDetailsStore.getPokemonDetails = function (url) {
    return pokemon[url] || null;
};

pokemonDetailsStore.fetchPokemonDetails = function (url) {
    $.ajax({
        url: url,
        success: function (response) {
            pokemon[url] = response;
            pokemonDetailsStore.emit('update');
        }
    });

    return pokemon[url] || null;
};

module.exports = pokemonDetailsStore;