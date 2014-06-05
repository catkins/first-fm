var Router = Ember.Router.extend({
  location: ENV.locationType
});

Router.map(function() {
  this.resource('artists');
  this.resource('search', { path: '/search/:query'}, function() {

  });
});

export default Router;
