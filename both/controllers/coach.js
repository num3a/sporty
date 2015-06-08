CoachController = AppController.extend({

    template: 'Coach',
    path: '/coach/:_id',
    waitOn: function () {
        return Meteor.subscribe('Coaches.ById', this.params._id);
    },

    data: {
        coach: function() {
            var result = Coaches.findOne({});
            console.log('coach data', result);

            return result;
        }
    },
    action: function () {
        this.render('Coach');
    }
});

AppController.events({
    'click [data-action=logout]' : function() {
        AccountsTemplates.logout();
    }
});