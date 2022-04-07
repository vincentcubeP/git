$(document).ready(function(){
  // $(".img-1").click(function(){
  //     $(".img-2").animate(
  //       {
  //          left:"300px",
  //       }, 1000);
  //     $(".img-2").animate(
  //       {
  //          right:"300px",
  //       }, 1000);
  // });
  $(".img-1").click(function(){
      $(".img-3").toggle(
          $(".img-3").show(),
          $(".img-3").hide()
      );
  });
});