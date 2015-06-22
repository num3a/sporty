CoachController = AppController.extend({

    template: 'coach',
    path: '/coach/:_id',
    waitOn: function () {
        return [Meteor.subscribe('Coaches.ById', this.params._id),
            Meteor.subscribe('Workouts.ByCoachId', this.params._id)];
    },
    data: function(){
        var coachId = this.params._id;
        return {
            coach: function() {
                return Coaches.findOne(coachId);
            },
            workouts : function() {
                return Workouts.findByCoachId(coachId);
            }
        };
    },
    action: function () {
        this.render('coach');
    }
});

AppController.events({
    'click [data-action=logout]' : function() {
        AccountsTemplates.logout();
    }
});