HomeController = AppController.extend({

  waitOn: function () {
      return Meteor.subscribe('Coaches.ById', this.params._id);
  },

    data: {
        coaches: Coaches.find({})
    },
});

HomeController.events({

});
