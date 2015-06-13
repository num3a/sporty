App.info({
    id: 'com.nest.sporty.sporty',
    name: 'Sporty',
    description: 'Personal trainer on demand',
    author: 'Emmanuel ERNEST',
    email: 'ernest.emmanuel@hotmaiL.fr',
    website: 'http://www.nodeforsure.com'
});

App.accessRule('http://meteor.local/*');
App.accessRule('http://178.62.127.71/*');
App.accessRule('http://placehold.it/*');

Cordova.depends({
    "phonegap-googlemaps-plugin": "https://github.com/wf9a5m75/phonegap-googlemaps-plugin/tarball/ac35f0aef"
});

