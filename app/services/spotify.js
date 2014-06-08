var SpotifyService = Ember.Object.extend({

  artworkUrlCache: {},
  webSearchPath: 'http://ws.spotify.com/search/1/',
  webLookupPath: 'http://ws.spotify.com/lookup/1/.json',
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

  getArtist: function(spotifyId) {
    return this.queryLookupService(spotifyId, 'albumdetail')
            .then(function(response) {
              return response.artist;
            });
  },

  getAlbum: function(spotifyId) {
    return this.queryLookupService(spotifyId, 'trackdetail')
            .then(function(response) {
              return response.album;
            });
  },

  getTrack: function(spotifyId) {
    return this.queryLookupService(spotifyId)
            .then(function(response) {
              return response.track;
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

  queryLookupService: function(spotifyId, extras) {
    return $.getJSON(this.webLookupPath, { uri: spotifyId, extras: extras });
  },

  querySearchService: function(type, query) {
    return $.getJSON(this.webSearchPath + type + '.json', { q: query });
  },

  queryEmbedService: function(spotifyId) {
    return $.getJSON(this.artworkPath, { url: spotifyId });
  }

});

export default SpotifyService;
