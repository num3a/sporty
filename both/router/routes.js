Router.route('/', {
  name: 'home'
});

Router.route('/dashboard', {
  name: 'dashboard'
});

Router.route('/map', {
  name: 'map'
});

Router.route('/coach/:_id',{
  name: 'coach.detail',
  controller: 'CoachController',
});


Router.plugin('ensureSignedIn', {
  only: [
    'dashboard',
    'coach.detail'
  ]
});