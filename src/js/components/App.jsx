var React = require('react');

var PokemonList = require('./PokemonList.jsx');
var Favorites = require('./Favorites.jsx');

var favoritesStore = require('../stores/favoritesStore');

var App = React.createClass({

    getInitialState: function () {
        return {
            favorites: favoritesStore.fetchFavorites()
        };
    },

    componentWillMount: function () {
        var _this = this;
        favoritesStore.on('update', this.handleStoreUpdate);
    },

    handleStoreUpdate: function () {
        this.setState({
            favorites: favoritesStore.getFavorites()
        });
    },

    render: function () {
        return (
            <main>
                <h1>Pokedex</h1>
                <PokemonList favorites={this.state.favorites} />
                <Favorites favorites={this.state.favorites} />
            </main>
        );    
    }

});

module.exports = App;