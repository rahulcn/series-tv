import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  overview: DS.attr(),
  href: DS.attr(),
  external: DS.attr()
});
