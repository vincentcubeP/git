$(document).ready(function () {
    $(".img,.list-alg").not(".active").hide();
});
//이전 슬라이드
function prevSlide(element_id) {
  var allSlide = $(`#${element_id} .img`); 
  var allSlideAlg = $(`#${element_id} .list-alg`);
  var currentIndex = 0;
  $(`#${element_id} .img`).hide();
  $(`#${element_id} .list-alg`).hide();
  $(`#${element_id} .img`).each(function(index,item){ 
      if($(this).hasClass("active")) {
          currentIndex = index;
      }
  }); 
  $(`#${element_id} .list-alg`).each(function(index,item){ 
      if($(this).hasClass("active")) {
          currentIndex = index;
      }
  });
  var newIndex = 0;
  if(currentIndex <= 0) {
      newIndex = allSlide.length-1;
  } else {
      newIndex = currentIndex-1;
  } 
  $(`#${element_id} .img`).removeClass("active");
  $(`#${element_id} .img`).eq(newIndex).addClass("active");
  $(`#${element_id} .img`).eq(newIndex).show(); 
  $(`#${element_id} .list-alg`).removeClass("active");
  $(`#${element_id} .list-alg`).eq(newIndex).addClass("active");
  $(`#${element_id} .list-alg`).eq(newIndex).show();
}

//다음 슬라이드
function nextSlide(element_id) {
  var allSlide = $(`#${element_id} .img`);
  var allSlideAlg = $(`#${element_id} .list-alg`);
  var currentIndex = 0;
  $(`#${element_id} .img`).hide();  
  $(`#${element_id} .list-alg`).hide();  
  $(`#${element_id} .img`).each(function(index,item){
      if($(this).hasClass("active")) {
          currentIndex = index;
      }
  });
  $(`#${element_id} .list-alg`).each(function(index,item){
      if($(this).hasClass("active")) {
          currentIndex = index;
      }
  });
  var newIndex = 0;  
  if(currentIndex >= allSlide.length-1) {
      newIndex = 0;
  } else {
      newIndex = currentIndex+1;
  }
  $(`#${element_id} .img`).removeClass("active");
  $(`#${element_id} .img`).eq(newIndex).addClass("active");
  $(`#${element_id} .img`).eq(newIndex).show();
  $(`#${element_id} .list-alg`).removeClass("active");
  $(`#${element_id} .list-alg`).eq(newIndex).addClass("active");
  $(`#${element_id} .list-alg`).eq(newIndex).show();
}