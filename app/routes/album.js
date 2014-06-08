var AlbumRoute = Ember.Route.extend({
  model: function(params) {
    return this.get('spotify').getAlbum(params.album_id);
  }
});

export default AlbumRoute;
