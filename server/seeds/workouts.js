Meteor.startup(function() {


  Factory.define('workouts', Workouts, {

      coachId: function(){
          return Coaches.findOne()._id;
      },
    activity : 'running',
    
    beginDate : function(){
        return new moment().add(_.random(1, 15), 'days').format();
    },
    endDate : function(){
        return new moment().add(_.random(15, 30), 'days').format();
    },
    description: function(){
      return Fake.paragraph();
    },
    maxParticipant : 1,
    
    participants : [],
    
    location : function(){
        return 'Paris';
    }
    
  });

  if (Workouts.find({}).count() === 0) {

    _(100).times(function(n) {
      Factory.create('workouts');
    });

  }

});
