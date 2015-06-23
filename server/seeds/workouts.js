Meteor.startup(function() {


    Factory.define('workouts', Workouts, {

        coachId: function(){
            var coachesCount = Coaches.find().count();

            var random = _.random(1, coachesCount);

            var coaches = Coaches.find().fetch();

            var randomCoach =  coaches[random];
            return randomCoach._id;
        },
        activity : 'running',

        beginDate : function(){
            return new moment().add(_.random(1, 15), 'days').toDate();
        },
        endDate : function(){
            return new moment().add(_.random(15, 30), 'days').toDate();
        },
        description: function(){
            return Fake.paragraph();
        },
        maxParticipant : 1,

        participants : [],

        location : function(){
            return 'Paris';
        }

    });

    if (Workouts.find({}).count() === 0) {

        _(100).times(function(n) {

            Factory.create('workouts');
        });

    }

});
