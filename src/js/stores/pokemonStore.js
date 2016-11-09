var EventEmitter = require('eventemitter3');
var $ = require('jquery');

var pokemonStore = Object.create(EventEmitter.prototype);
EventEmitter.call(pokemonStore);

// Collection
var pokemon = [];

pokemonStore.getPokemon = function () {
    return pokemon;
};

pokemonStore.fetchPokemon = function (offset) {
    offset = offset || 0;
    $.ajax({
        // method: 'GET',
        url: 'http://pokeapi.co/api/v2/pokemon?offset=' + offset,
        success: function (response) {
            var results = response.results;
            pokemon = pokemon.concat(results);
            pokemonStore.emit('update');
        }
    });

    return pokemon;
};

window.pokemonStore = pokemonStore;

module.exports = pokemonStore;