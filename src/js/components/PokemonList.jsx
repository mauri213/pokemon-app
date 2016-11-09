var React = require('react');

var pokemonStore = require('../stores/pokemonStore');
var PokemonListItem = require('./PokemonListItem.jsx');

var PokemonList = React.createClass({
    
    getInitialState: function () {
        return {
            offset: 20,
            pokemon: pokemonStore.fetchPokemon()
        };
    },

    componentWillMount: function () {
        var _this = this;
        pokemonStore.on('update', function () {
            _this.setState({
                pokemon: pokemonStore.getPokemon()
            });
        });
    },

    render: function () {
        var _this = this;
        // For every pokemon we create a PokemonListItem
        var pokemonListItems = this.state.pokemon.map(function (pokemon) {
            // We check to see if our favorites (from props) contains the current pokemon (find it by name).
            var favorite = !_this.props.favorites.find(function (favorite) {
                return favorite.name === pokemon.name;
            });
            return <PokemonListItem key={pokemon.url} name={pokemon.name} url={pokemon.url} favorite={favorite} />
        });
        return (
            <div>
                <button onClick={this.handleLoadClick}>Load More</button>
                {pokemonListItems}
            </div>
        );
    },

    handleLoadClick: function () {
        this.setState({
            offset: this.state.offset + 20
        });
        pokemonStore.fetchPokemon(this.state.offset);
    }

});

module.exports = PokemonList;