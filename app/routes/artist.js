var ArtistRoute = Ember.Route.extend({
  model: function(params) {
    return this.get('spotify').getArtist(params.artist_id);
  }
});

export default ArtistRoute;
