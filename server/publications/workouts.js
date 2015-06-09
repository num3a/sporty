Meteor.publish('Workouts.Limit', function(limit){
   //check(limit,Number);
    return Workouts.find({},{limit: limit});
});

