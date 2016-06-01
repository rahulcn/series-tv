import Ember from 'ember';

export default Ember.Route.extend({
    model: function(params) {
        var show_id = this.modelFor('show').get('id')
        return this.store.query('season', { show_id: show_id });
    }
});
