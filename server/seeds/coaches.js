Meteor.startup(function() {

    Factory.define('coaches', Coaches, {
        firstName: function() {
            return Fake.user().name;
        },
        lastName:function(){
          return Fake.user().surname;
        },
        activity: function(){
            var sampleActivies = ['running','cycling', 'fitness', 'streetworkout','yoga','crossfit'];

            var activies = [];
            _( _.random(1, 5)).times(function(){
                var newActivity = sampleActivies[_.random(0,4)];
                if(activies.indexOf(newActivity) == -1){
                    activies.push(newActivity);
                }
            });
            return activies;
        },
        location:function(){
            return {
                city: 'Paris'
            };
        },
        rating: function() {
            return _.random(1, 5);
        },
        resume : function(){
            return Fake.paragraph();
        }
    });

    if (Coaches.find({}).count() === 0) {

        _(1000).times(function(n) {
            Factory.create('coaches');
        });

    }

});
