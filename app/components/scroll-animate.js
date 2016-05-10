import Ember from 'ember';

export default Ember.Component.extend({
	didInsertElement() {
		this._super(...arguments);

        new AnimOnScroll( document.getElementById( 'grid-row' ), {
            minDuration : 0.4,
            maxDuration : 0.7,
            viewportFactor : 0.2
        });
	}
});
