//generate a password
function password(){
  "use strict";
  var length = 8;
  var charcter = "abcdefghijklmnopqrstuvwxyz1234567890";
  var output = "";
  
  //start at 0, put length in var random, if i is less than 8 keep looping to get a differnt letter...
  //...get a random character between a-0, then loop again if < length
  for(var i=0, random=charcter.length; i<length; i++){
    output += charcter.charAt(Math.floor(Math.random()*random));
  }
  
/* TEST LOOP
function loop(){
  for(i=0;i<10;i++){
    document.write(i+"<br>");
  }
}
loop();
*/
  
  return output;
  //return result.toUpperCase();
}


//generate a password & put it in my h1 tag
function refresh(){
  "use strict";
  $("#js-display").text(password());
}

//show a password, then click button to generate a different password
$(document).ready(function(){
  "use strict";
  refresh();
  $("#js-refresh").on("click", function(){
    refresh();
  });
});