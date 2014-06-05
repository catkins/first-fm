var SearchRoute = Ember.Route.extend({
  afterModel: function (model, transition) {
    var query = Em.get(transition, 'params.search.query');
    this.controllerFor('search').set('query', query);
  },

  model: function(params) {
    var query = params.query;
    var spotify = this.get('spotify');

    return spotify.searchArtists(query);
  }
});

export default SearchRoute;
