var SpotifyService = Ember.Object.extend({

  searchArtists: function(query) {
    return $.getJSON('http://ws.spotify.com/search/1/artist.json', { q: query })
            .then(function(response) {
              return response.artists;
            });
  },

  searchAlbums: function(query) {
    // TODO
  },

  searchTracks: function(query) {
    // TODO
  }

});

export default SpotifyService;
