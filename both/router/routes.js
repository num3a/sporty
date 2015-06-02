
Router.route('/dashboard', {
  name: 'dashboard'
});



Router.plugin('ensureSignedIn', {
  only: ['dashboard']
});