Template.registerHelper('truncate2', function(string, length) {
  var cleanString = _(string).stripTags();
  return _(cleanString).truncate(length);
});

