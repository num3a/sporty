Router.route('/coach/:_id',{
    name: 'coach.detail',

    // If the template name is different from the route name you can specify it
    // explicitly here.
    template: 'Coach',

    // A layout template to be used with this route.
    // If there is no layout provided, a default layout will
    // be used.
    layoutTemplate: 'appLayout',

    waitOn: function () {
        return Meteor.subscribe('Coaches.ById', this.params._id);
    },

    data: {
      coach : { name : 'hello'}
    },

    // You can provide any of the hook options described below in the "Using
    // Hooks" section.
    onRun: function () {},
    onRerun: function () {},
    onBeforeAction: function () {
    },
    onAfterAction: function () {},
    onStop: function () {},

    // The same thing as providing a function as the second parameter. You can
    // also provide a string action name here which will be looked up on a Controller
    // when the route runs. More on Controllers later. Note, the action function
    // is optional. By default a route will render its template, layout and
    // regions automatically.
    // Example:
    //  action: 'myActionFunction'
    action: function () {
        // render all templates and regions for this route
        this.render();
    }
});