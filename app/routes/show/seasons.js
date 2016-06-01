import Ember from 'ember';

export default Ember.Route.extend({
    model: function(params) {
        var show_id = this.modelFor('show').get('id')
        var url = 'api/v1/shows/' + show_id
        this.store.adapterFor('season').set('namespace', url);
        return this.store.findAll('season');
    }
});
