import DS from 'ember-data';

export default DS.Model.extend({
    number: DS.attr(),
    external: DS.attr(),
    show: DS.belongsTo('show'),
    episodes: DS.hasMany('episode')
});
