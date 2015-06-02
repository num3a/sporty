Template.Coach.helpers({
    coach:         return Meteor.subscribe('Coaches.ById', this.params._id);

});