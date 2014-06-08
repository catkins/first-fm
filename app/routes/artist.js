var ArtistRoute = Ember.Route.extend({
  model: function(params) {
    return this.get('spotify').queryLookupService(params.artist_id);
  }
});

export default ArtistRoute;
