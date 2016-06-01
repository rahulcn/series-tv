import Ember from 'ember';

export default Ember.Route.extend({
    model: function(params) {
        var url = 'api/v1/seasons/' + params.season_id
        // :%s/this.container.lookup\('adapter:(.+)'\)/this.store.adapterFor('$1')/g
        this.store.adapterFor('season').set('namespace', url);
        return this.store.findAll('episode');
    }
});
