import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr(),
    overview: DS.attr(),
    number: DS.attr(),
    aired_at: DS.attr(),
    external: DS.attr(),
    season: DS.belongsTo('season')
});
