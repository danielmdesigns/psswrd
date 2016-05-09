//if handheld, remove copy&paste function
if(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)){
  $("#js-copy").hide();
  $("#js-refresh").css({marginLeft:"0"});
}

//fittext.js
$("#js-display").fitText(0.5, {
  minFontSize: "40px",
  maxFontSize: "140px"
});

$("#js-refresh").click(function(){ 
  "use strict";
  $("#js-refresh").toggleClass("btn-spin");
  $("#js-refresh").on('webkitAnimationEnd oanimationend msAnimationEnd animationend',   
  function(){
	  $("#js-refresh").removeClass("btn-spin");
  });
});