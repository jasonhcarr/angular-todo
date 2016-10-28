(function($) {
  "use strict";

})(jQuery);
;//An example of testing with chai

//src
function romanNumerals(num) {
  if (num ===1){
    return 'I';
  } else if(num ===2){
    return 'II';
  } else if (num === 4){
    return 'IV';
  }
}
module.exports = romanNumerals;
