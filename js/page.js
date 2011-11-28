$(function(){
  $("li","nav ul").click(function(){
    $(this).addClass("current").siblings().removeClass("current");
  });  
});