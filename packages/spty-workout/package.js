Package.describe({
  name: 'num3a:spty-workout',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('spty-workout.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('num3a:spty-workout');
  api.addFiles('spty-workout-tests.js');
});
