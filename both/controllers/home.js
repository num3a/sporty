HomeController = AppController.extend({

  waitOn: function () {
      return Meteor.subscribe('Coaches.Limit', 30);
  },

    data: {
        coaches: Coaches.find({})
    },
});
