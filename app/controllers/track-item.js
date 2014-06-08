var TrackItemController = Ember.ObjectController.extend({
  trackNumber: function() {
    return this.get('model.track-number');
  }.property('model')
});

export default TrackItemController;
