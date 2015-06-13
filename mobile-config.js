App.info({
    id: 'com.nest.sporty.sporty',
    name: 'Sporty',
    description: 'Personal trainer on demand',
    author: 'Emmanuel ERNEST',
    email: 'ernest.emmanuel@hotmaiL.fr',
    website: 'http://www.nodeforsure.com'
});

App.accessRule('*');
App.accessRule('http://meteor.local/*');
App.accessRule('http://ec2-52-24-129-100.us-west-2.compute.amazonaws.com/*');
App.accessRule('http://placehold.it/*');
App.accessRule('*.google.com/*');
App.accessRule('*.googleapis.com/*');
App.accessRule('*.gstatic.com/*');
App.accessRule('https://enginex.kadira.io/*');

App.configurePlugin("plugin.google.maps", {
    "API_KEY_FOR_ANDROID":"AIzaSyCRvS-Av2DibdqCZD4pK7rDFYFOd-f-vts"
});