var SearchRoute = Ember.Route.extend({
  afterModel: function (model, transition) {
    var query = Em.get(transition, 'params.search.query');
    this.controllerFor('search').set('query', query);
  },

  model: function(params) {
    var query = params.query;
    var spotify = this.get('spotify');

    var searchSpotify = Em.RSVP.all([
      spotify.searchArtists(query),
      spotify.searchAlbums(query),
      spotify.searchTracks(query)]
    );

    return searchSpotify.then(function(results) {
      return results.reduce(function(aggregate, resultSet) {
        return aggregate.concat(resultSet);
      }, []).sort(function(x,y) { return x.popularity < y.popularity; });
    });
  }
});

export default SearchRoute;
