Router.route('/', {
  name: 'home'
});

Router.route('/dashboard', {
  name: 'dashboard'
});

Router.route('/coach/:_id',{
    name: 'coach.detail',
    controller: 'CoachController',
});

Router.plugin('ensureSignedIn', {
  only: ['dashboard']
});
