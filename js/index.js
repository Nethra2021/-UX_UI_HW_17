$(document).ready(function(e) { 
$("li a").click(function(){
  var pageId = $(this).attr("data-page");
  $("html, body").animate({ scrollTop: $("#"+pageId).offset().top - 150}, 1000);
});

function hover(element) {
  element.setAttribute('src', 'images/Project1Hover.png');
}

function unhover(element) {
  element.setAttribute('src', 'images/Project1.png"');
}
});