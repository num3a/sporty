//server api key : AIzaSyCOY2OcYcoR6oeZ4rfbv_YxGMQLzSC4bC4

if(Meteor.isCordova){
    Meteor.startup(function() {
        var GOOGLE = new plugin.google.maps.LatLng(37.422858, -122.085065);
        var map = plugin.google.maps.Map.getMap(document.getElementById('map_canvas'));
        map.addEventListener(plugin.google.maps.event.MAP_READY, function() {
            map.setCenter(GOOGLE);
        });
    });
}


function initializeWebMap(){
    var mapOptions = {
        center: { lat: -34.397, lng: 150.644},
        zoom: 8
    };
    var map = new google.maps.Map(document.getElementById('map_canvas'),
        mapOptions);
}

function onMapInit(map) {
}

function initializeCordovaMap(){
    // Define a div tag with id="map_canvas"
    var mapDiv = document.getElementById("map_canvas");

    // Initialize the map plugin
    var map = plugin.google.maps.Map.getMap(mapDiv);

    // You have to wait the MAP_READY event.
    map.on(plugin.google.maps.event.MAP_READY, onMapInit);
}


