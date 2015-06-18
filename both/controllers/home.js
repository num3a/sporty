HomeController = AppController.extend({

  waitOn: function () {
      return Meteor.subscribe('Coaches.Limit', 100);
  },

    data: {
        coaches: Coaches.find({}),
        defaultCoaches: Coaches.find({})
    },
});

HomeController.events({

});