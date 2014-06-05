var ApplicationController = Ember.Controller.extend({
  actions: {
    search: function(query) {
      this.set('searchQuery', '');
      this.transitionToRoute('search', query);
    }
  }
});

export default ApplicationController;
