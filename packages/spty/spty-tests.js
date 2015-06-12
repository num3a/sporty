// Write your tests here!
// Here is an example.
Tinytest.add('example', function (test) {
  test.equal(true, true);
});

Tinytest.add('SPTY is not null',function(test) {
    test.isNotNull(SPTY);
});

Tinytest.add('SPTY sub namespace are not null',function(test) {
    
    test.isNotNull(SPTY.Geolocation);
    test.isNotNull(SPTY.Payment);
    test.isNotNull(SPTY.Notification);
    test.isNotNull(SPTY.Share);
    
});
