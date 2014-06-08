var TrackRoute = Ember.Route.extend({
  model: function(params) {
    return this.get('spotify').getTrack(params.track_id);
  }
});

export default TrackRoute;
