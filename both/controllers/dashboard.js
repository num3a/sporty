DashboardController = AppController.extend({
  waitOn: function() {
    return Meteor.subscribe('Workouts.Limit', 30);
  },
  data: {
    workouts: Workouts.find({})
  },
  onAfterAction: function () {
    Meta.setTitle('Dashboard');
  }
});

DashboardController.events({
  'click [data-action=doSomething]': function (event, template) {
    event.preventDefault();
  }
});
