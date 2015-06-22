Template.registerHelper('truncate', (string,length) => {
  var cleanString = _(string).stripTags();
  return _(cleanString).truncate(length);  
});

Template.registerHelper('getInitialCap', (nameToCapitalize) => {
    check(nameToCapitalize, String);

    if(nameToCapitalize.length == 0){
        return "";
    }

    return nameToCapitalize[0].toUpperCase() + ".";
});
