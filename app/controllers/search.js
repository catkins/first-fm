var SearchController = Ember.ArrayController.extend({
  pageSize: 20,

  currentPage: function() {
    return this.get('model').slice(0, this.get('pageSize'));
  }.property('model')

});

export default SearchController;
