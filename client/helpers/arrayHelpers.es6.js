Template.registerHelper('getAdressToString', (array) => {
  check(array,[Match.Any]);
    if(array.length > 0){
        var result = array[0];
        
        if(Match.test(result, {address: String, verified: Boolean})){
            return result.address;
        }
    }
    return "";
});