var TrackItemController = Ember.ObjectController.extend({
  trackNumber: function() {
    return this.get('model.track-number');
  }.property('model'),

  duration: function() {
    var duration = moment.duration(this.get('length'), 'seconds');
    return duration.minutes() + ':' + duration.seconds();
  }.property('length')
});

export default TrackItemController;
