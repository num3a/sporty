MapController = AppController.extend({

    template: 'map',
    waitOn: function () {
      //  return Meteor.subscribe('Coaches.ById', this.params._id);
    },

    data: {

    },
    action: function () {
        this.render('map');
    }
});

AppController.events({
    'click [data-action=logout]' : function() {
        AccountsTemplates.logout();
    }
});