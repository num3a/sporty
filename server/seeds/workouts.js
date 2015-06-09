Meteor.startup(function() {

  Factory.define('workouts', Workouts, {
    
    activity : function(){
        var coach = Coaches.findOne({});
        
        return coach.activity[0];
    },
    
    beginDate : function(){
        
    },
    endDate : function(){
        
    },
    maxParticipant : 1,
    
    participants : [],
    
    location : function(){
        return 'Paris';
    }
    
  });

  if (Workouts.find({}).count() === 0) {

    _(10).times(function(n) {
      Factory.create('workouts');
    });

  }

});
