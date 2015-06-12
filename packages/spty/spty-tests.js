// Write your tests here!
// Here is an example.
//TODO: Add jasmine instead of TinyTest 
//https://github.com/Sanjo/meteor-jasmine#testing-an-application

Tinytest.add('[SPTY] SPTY is not null',function(test) {
    test.isNotNull(SPTY);
});

Tinytest.add('[SPTY] SPTY sub namespace are not null',function(test) {
    
    test.isNotNull(SPTY.Geolocation);
    test.isNotNull(SPTY.Payment);
    test.isNotNull(SPTY.Notification);
    test.isNotNull(SPTY.Share);
    
});
