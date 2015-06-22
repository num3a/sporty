HomeController = AppController.extend({

  waitOn: function () {
      return [Meteor.subscribe('Coaches.Limit', 30),
      Meteor.subscribe('Workouts.Limit',100)];
  },
    data: {
        coaches: Coaches.find({}),
        defaultCoaches: Coaches.find({})
    },
    action : function(){
        this.render();
    }
});

HomeController.events({

});