//if handheld, remove copy&paste function
if(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)){
  $(".copy").hide();
  $(".refresh").css({marginLeft:"0"});
}

//fittext.js
$(".display").fitText(0.5, {
  minFontSize: "40px",
  maxFontSize: "140px"
});