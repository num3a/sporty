HomeController = AppController.extend({

    waitOn: function () {
        return [
            Meteor.subscribe('Coaches.Limit', 100),
            Meteor.subscribe('Workouts.Limit',100),
            Meteor.subscribe('Disponibilities.All')
        ];
    },
    data: {
        coaches: function(){
            return Coaches.find({})
        }
    },
    action : function(){
        this.render();
    }
});

HomeController.events({

});