var React = require('react');

var favoritesStore = require('../stores/favoritesStore');

var Favorites = React.createClass({

    render: function () {
        return <div>{this.props.favorites.length}</div>;
    }

});

module.exports = Favorites;