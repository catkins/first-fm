var SearchResultController = Ember.ObjectController.extend({
  thumbnailSize: 300,

  artworkUrl: function() {
    var path = 'https://embed.spotify.com/oembed/?callback=?';

    var promise = $.getJSON(path, { url: this.get('href') })
                   .then(function(response) {
                     var url = response.thumbnail_url.replace('cover', this.get('thumbnailSize'));
                     return url;
                   }.bind(this));

    return DS.PromiseObject.create({ promise: promise});
  }.property(),

  foo: function() {
    return 'yolo';
  }.property()
});

export default SearchResultController;
