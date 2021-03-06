import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
  var url = 'http://congress.api.sunlightfoundation.com/committees?apikey=bc1fb9a95b38490593693e37c593627e&chamber=' + params.chamber;
    return Ember.$.getJSON(url).then(function(responseJSON) {
      return responseJSON.results;
    });
  }
});
