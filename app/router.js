var Router = Ember.Router.extend({
  location: ENV.locationType
});

Router.map(function() {
  this.resource('artist', { path: '/artists/:artist_id' });
  this.resource('album', { path: '/albums/:album_id' });
  this.resource('track', { path: '/tracks/:track_id' });
  this.resource('search', { path: '/search/:query' }, function() {

  });
});

export default Router;
