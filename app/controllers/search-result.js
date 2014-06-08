var SearchResultController = Ember.ObjectController.extend({
  placeholderImage: 'http://placehold.it/250x250&text=loading...',

  resultType: function() {
    return this.get('href').match(/:(track|album|artist):/)[1];
  }.property('href'),

  artworkUrlWithDefault: function() {
    return this.get('artworkUrl.content') || this.placeholderImage;
  }.property('artworkUrl.content', 'artworkUrl', 'model'),

  artworkUrl: function() {
    var spotifyId = this.get('href');

    if (this.get('album.href')) {
      spotifyId = this.get('album.href');
    }

    var promise = this.get('spotify').getArtwork(spotifyId);
    return DS.PromiseObject.create({ promise: promise});
  }.property(),
});

export default SearchResultController;
