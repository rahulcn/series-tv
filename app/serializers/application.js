import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    // debugger;
    // payload.data.attributes.amount = payload.data.attributes.cost.amount;
    // payload.data.attributes.currency = payload.data.attributes.cost.currency;
    //
    // delete payload.payload.attributes.cost;

    return this._super(...arguments);
  },
});
