var React = require('react');

var pokemonDetailsStore = require('../stores/pokemonDetailsStore');

var PokemonDetails = React.createClass({

    getInitialState: function () {
        return {
            pokemon: pokemonDetailsStore.fetchPokemonDetails(this.props.url)
        };
    },

    componentWillMount: function () {
        var _this = this;
        pokemonDetailsStore.on('update', this.handleStoreUpdate);
    },

    render: function () {
        if (this.state.pokemon) {
            return (
                <div>
                    <h3>{this.state.pokemon.name}</h3>
                    <img src={this.state.pokemon.sprites.front_default} />
                    <dl>
                        <dt>Weight</dt>
                        <dd>{this.state.pokemon.weight}</dd>
                    </dl>
                </div>
            );
        } else {
            return <div>Loading...</div>;
        }
    },

    componentWillUnmount: function () {
        pokemonDetailsStore.off('update', this.handleStoreUpdate);
    },

    handleStoreUpdate: function () {
        this.setState({
            pokemon: pokemonDetailsStore.getPokemonDetails(this.props.url)
        });
    }

});

module.exports = PokemonDetails;