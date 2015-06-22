//Meteor.subscribe('Coaches.Limit',100);

Template.home.helpers({
    workouts: function(){
        return Workouts.findWithLimit(30);
    }
});
Template.home.rendered = function() {
};
