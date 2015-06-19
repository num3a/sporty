Template.registerHelper('truncate', (string,length) => {
  var cleanString = _(string).stripTags();
  return _(cleanString).truncate(length);  
});


