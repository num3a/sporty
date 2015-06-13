Meteor.startup(function() {
if(Meteor.isCordova){
    initializeCordovaMap();
}
    else{
   // GoogleMaps.load();

}

});

function initializeWebMap(){
    var mapOptions = {
        center: { lat: -34.397, lng: 150.644},
        zoom: 8
    };
    var map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);
}

function initializeCordovaMap(){
    // Define a div tag with id="map_canvas"
    var mapDiv = document.getElementById("map-canvas");

    // Initialize the map plugin
    var map = plugin.google.maps.Map.getMap(mapDiv);

    // You have to wait the MAP_READY event.
    map.on(plugin.google.maps.event.MAP_READY, onMapInit);
}