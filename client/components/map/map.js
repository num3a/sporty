//server api key : AIzaSyCOY2OcYcoR6oeZ4rfbv_YxGMQLzSC4bC4



Meteor.startup(function() {
    GoogleMaps.load();
});

Template.map.helpers({
    mapOptions: function() {
        if (GoogleMaps.loaded()) {
            return {
                center: new google.maps.LatLng(-37.8136, 144.9631),
                zoom: 8
            };
        }
    }
});

Template.map.onCreated(function() {
    GoogleMaps.ready('map', function(map) {
        console.log("I'm ready!");
    });
});