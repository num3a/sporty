Workouts = new Meteor.Collection('workouts');

Workouts.findWithLimit = function(limit){
    check(limit, Number);
    
    return Workouts.find({}, {limit:limit});
};

Workouts.findByCoachId = function(coachId){
    return Workouts.find({coachId: coachId})
}