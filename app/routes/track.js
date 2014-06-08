var TrackRoute = Ember.Route.extend({
  model: function(params) {
    return this.get('spotify').queryLookupService(params.track_id);
  }
});

export default TrackRoute;
