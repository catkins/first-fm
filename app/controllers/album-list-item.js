var AlbumListItemController = Ember.ObjectController.extend({
  placeholderImage: 'http://placehold.it/250x250&text=loading...',

  artworkUrlWithDefault: function() {
    return this.get('artworkUrl.content') || this.placeholderImage;
  }.property('artworkUrl.content', 'artworkUrl', 'model'),

  artworkUrl: function() {
    var spotifyId = this.get('href');
    var promise = this.get('spotify').getArtwork(spotifyId);
    return DS.PromiseObject.create({ promise: promise});
  }.property(),
});

export default AlbumListItemController;
