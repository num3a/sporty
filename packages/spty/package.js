Package.describe({
  name: 'num3a:spty',
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
  api.addFiles('spty.js');
  
  /*
  api.use('num3a:spty-notification',['client','server']);
  api.use('num3a:spty-geolocation',['client','server']);
  api.use('num3a:spty-payment',['client','server']);
  api.use('num3a:spty-share',['client','server']);
  api.use('num3a:spty-workout',['client','server']);
  */
  api.use([
    'num3a:spty-notification',
    'num3a:spty-geolocation',
    'num3a:spty-payment',
    'num3a:spty-share',
    'num3a:spty-workout',
  ],['client','server']);
  
  api.export('SPTY', ['client','server']);
});

Package.onTest(function(api) {
  api.use('tinytest');

  api.use('num3a:spty');
  api.addFiles('spty-tests.js');
});
