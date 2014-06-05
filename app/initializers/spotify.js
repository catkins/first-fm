import SpotifyService from '../services/spotify'

export default {
  name: 'spotify-service',

  initialize: function(container, application) {
    application.register('service:spotify', SpotifyService);
    application.inject('route', 'spotify', 'service:spotify');
  }
};
