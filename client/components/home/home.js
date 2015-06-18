Template.home.helpers({
    workouts: function(){
        return Workouts.findWithLimit(30);
    }
});
Template.home.rendered = function() {
};
