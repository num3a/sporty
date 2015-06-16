Meteor.startup(function() {

  $('.button-collapse').sideNav({
      menuWidth: 300, // Default is 240
      edge: 'right', // Choose the horizontal origin
      closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
    }
  );
          
});

Template._header.helpers({
    
});

Template._header.onRendered(function(){
  $(".button-collapse").sideNav({
      closeOnClick: true
  });
  $(".dropdown-button").dropdown();
});