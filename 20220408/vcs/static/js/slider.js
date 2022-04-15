
//이전 슬라이드
function prevSlide(element_id) {
  $(`#${element_id} .img`).hide(); //모든 div 숨김
  var allSlide = $(`#${element_id} .img`); //모든 div 객체를 변수에 저장 
  $(`#${element_id} .alg`).hide(); 
  var allSlide = $(`#${element_id} .alg`);
  var currentIndex = 0; //현재 나타난 슬라이드의 인덱스 변수        
  //반복문으로 현재 active클래스를 가진 div를 찾아 index 저장
  $(`#${element_id} .img`).each(function(index,item){ 
      if($(this).hasClass("active")) {
          currentIndex = index;
      }
  }); 
  $(`#${element_id} .alg`).each(function(index,item){ 
      if($(this).hasClass("active")) {
          currentIndex = index;
      }
  });         

  //새롭게 나타낼 div의 index
  var newIndex = 0;
  if(currentIndex <= 0) {
      //현재 슬라이드의 index가 0인 경우 마지막 슬라이드로 보냄(무한반복)
      newIndex = allSlide.length-1;
  } else {
      //현재 슬라이드의 index에서 한 칸 만큼 뒤로 간 index 지정
      newIndex = currentIndex-1;
  } 
  //모든 div에서 active 클래스 제거            
  $(`#${element_id} .img`).removeClass("active");
  //새롭게 지정한 index번째 슬라이드에 active 클래스 부여 후 show()
  $(`#${element_id} .img`).eq(newIndex).addClass("active");
  $(`#${element_id} .img`).eq(newIndex).show();
 
  $(`#${element_id} .alg`).removeClass("active");
  $(`#${element_id} .alg`).eq(newIndex).addClass("active");
  $(`#${element_id} .alg`).eq(newIndex).show();
}    

//다음 슬라이드
function nextSlide(element_id) {
  $(`#${element_id} .img`).hide();
  var allSlide = $(`#${element_id} .img`);
  $(`#${element_id} .alg`).hide();
  var allSlide = $(`#${element_id} .alg`);
  var currentIndex = 0;

  $(`#${element_id} .img`).each(function(index,item){
      if($(this).hasClass("active")) {
          currentIndex = index;
      }
  });
  $(`#${element_id} .alg`).each(function(index,item){
      if($(this).hasClass("active")) {
          currentIndex = index;
      }
  });

  var newIndex = 0;
  
  if(currentIndex >= allSlide.length-1) {
      //현재 슬라이드 index가 마지막 순서면 0번째로 보냄(무한반복)
      newIndex = 0;
  } else {
      //현재 슬라이드의 index에서 한 칸 만큼 앞으로 간 index 지정
      newIndex = currentIndex+1;
  }
  $(`#${element_id} .img`).removeClass("active");
  $(`#${element_id} .img`).eq(newIndex).addClass("active");
  $(`#${element_id} .img`).eq(newIndex).show();

  $(`#${element_id} .alg`).removeClass("active");
  $(`#${element_id} .alg`).eq(newIndex).addClass("active");
  $(`#${element_id} .alg`).eq(newIndex).show();
}    