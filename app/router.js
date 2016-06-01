import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
    this.route('about');
    this.route('shows');
    this.route('show', { path: '/shows/:show_id' }, function() {
        this.route('seasons', { path: '/seasons' }, function() {
            // this.route('season', { path: '/:season_id' })
            this.route('episodes', { path: '/:season_id/episodes' }, function() {
                this.route('episode', { path: '/:episode_id' })
            });
        });
    });
});

export default Router;
// this.route('episodes', { path: '/:season_id/episodes' }, function() {
//     this.route('episode', { path: '/:episode_id' })
// });
