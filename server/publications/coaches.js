Meteor.publish('Coaches.Limit', function(limit){
    return Coaches.find({},{limit: limit});
});

Meteor.publish('Coaches.ByActivity',function(activity){
        check(activity, String);
    if(_.isEmpty(query)){
        return this.ready();
    }

    return Coaches.searchByActivity(activity);
})

Meteor.publish('Coaches.ById', function(id) {
    return  Coaches.find({_id: id});
});
