Meteor.startup(function() {

  Meteor.Mailgun.config({
    username: 'postmaster@sandbox621a71c124594c1b8796229e0db54deb.mailgun.org',
    password: 'c5b9a47178694fcf79caa7fab82c050d'
  });

  Meteor.methods({
    'sendContactEmail': function(name, email, message) {
      this.unblock();

      Meteor.Mailgun.send({
        to: 'recipient@example.com',
        from: name + ' <' + email + '>',
        subject: 'New Contact Form Message',
        text: message,
        html: Handlebars.templates['contactEmail']({siteURL: Meteor.absoluteUrl(), fromName: name, fromEmail: email, message: message})
      });
    }
  });
});
