var React = require('react');

var PokemonDetails = require('./PokemonDetails.jsx');
var favoritesStore = require('../stores/favoritesStore');

var PokemonListItem = React.createClass({
    
    getInitialState: function () {
        return {
            detailsVisible: false
        }
    },

    render: function () {
        var details;
        var favorite;

        if (this.state.detailsVisible) {
            details = <PokemonDetails url={this.props.url} />;
        }

        if (this.props.favorite) {
            favorite = <button onClick={this.handleFavoritesClick}>Add to favorites</button>;
        }

        return (
            <div onClick={this.handleDetailsClick}>
                {this.props.name}
                {details}
                {favorite}
            </div>
        );
    },

    handleDetailsClick: function () {
        this.setState({
            detailsVisible: !this.state.detailsVisible
        });
    },

    handleFavoritesClick: function () {
        favoritesStore.addFavorite(this.props.name);
    }

});

module.exports = PokemonListItem;