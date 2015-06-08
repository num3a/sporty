Meteor.publish('Coaches.Limit', function(limit){
    return Coaches.find({},{limit: limit});
});

Meteor.publish('Coaches.ById', function(id) {
    return  Coaches.find({_id: id});
});
