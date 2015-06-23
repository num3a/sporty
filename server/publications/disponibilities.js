Meteor.publish('Disponibilities.All', function(){
    return Disponibilities.find( { expirationDate: { $lte: new Date() } }  );
});