Meteor.publish('Coaches.Limit', function(limit){
    return Coaches.find({},{limit: limit});
});

Meteor.publish("Coaches.ById", function(coachId) {
    return Coaches.find( coachId);
});
