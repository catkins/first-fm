var AlbumRoute = Ember.Route.extend({
  model: function(params) {
    return this.get('spotify').queryLookupService(params.album_id);
  }
});

export default AlbumRoute;
