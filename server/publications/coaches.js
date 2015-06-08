Meteor.publish('Coaches.Limit', function(limit){
    return Coaches.find({},{limit: limit});
});

Meteor.publish('Coaches.ById', function() {
    return  Coaches.find({_id: 'sCoj4jp5svWHzRn26'});
});
