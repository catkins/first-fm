var SpotifyService = Ember.Object.extend({

  artworkUrlCache: {},
  webServicePath: 'http://ws.spotify.com/search/1/',
  artworkPath: 'https://embed.spotify.com/oembed/?callback=?',

  searchArtists: function(query) {
    return this.querySearchService('artist', query)
            .then(function(response) {
              return response.artists;
            });
  },

  searchAlbums: function(query) {
    return this.querySearchService('album', query)
            .then(function(response) {
              return response.albums;
            });
  },

  searchTracks: function(query) {
    return this.querySearchService('track', query)
            .then(function(response) {
              return response.tracks;
            });
  },

  getArtwork: function(spotifyId) {
    var artworkUrlCache = this.artworkUrlCache;

    if (! artworkUrlCache[spotifyId]) {
      artworkUrlCache[spotifyId] = this.queryEmbedService(spotifyId)
         .then(function(response) {
           var url = response.thumbnail_url;
           return url;
         }.bind(this));

    }

    return DS.PromiseObject.create({ promise: artworkUrlCache[spotifyId]});
  },

  querySearchService: function(type, query) {
    return $.getJSON(this.webServicePath + type + '.json', { q: query });
  },

  queryEmbedService: function(spotifyId) {
    return $.getJSON(this.artworkPath, { url: spotifyId });
  }

});

export default SpotifyService;
