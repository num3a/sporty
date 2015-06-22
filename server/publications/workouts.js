
Meteor.publish('Workouts.Limit', function(limit){
   //check(limit,Number);
    return Workouts.findWithLimit(limit);
});

Meteor.publish('Workouts.ByCoachId',function(coachId){
    return Workouts.findByCoachId(coachId);
});
