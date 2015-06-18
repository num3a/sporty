Coaches = new Meteor.Collection('coaches');

Coaches.searchByActivity = function(activity) {
    return Coaches.find({activity: activity}   , {
        limit: 100
    });
};

Coaches.initEasySearch(['activity'], {
    'limit' : 20,
    'use' : 'mongo-db'
});