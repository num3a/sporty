CoachController = AppController.extend({

    template: 'Coaches',

    waitOn: function () {
       return Meteor.subscribe('Coaches.ById', this.params._id);
    },

    data: function () {
        coaches: Coaches.findOne({_id: this.params._id})
    },

    action: function () {
        this.render();
    }
});