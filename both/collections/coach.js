Coaches = new Meteor.Collection('coaches');

Coaches.searchByActivity = function(activity) {
    return Coaches.find({activity: activity}   , {
        limit: 30
    });
};

Coaches.initEasySearch(['activity'], {
    'limit' : 20,
    'use' : 'mongo-db'
});