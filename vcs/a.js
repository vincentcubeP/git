$(function(){
  var box = $('.box');
  var btn_100px = $('.btn_100px');
  var btn_200px = $('.btn_200px');
  var btn_300px = $('.btn_300px');
 
  btn_100px.click(function(){
    box.css('width','100px');
  });
  btn_200px.click(function(){
    box.css('width','200px');
  });
  btn_300px.click(function(){
    box.css('width','300px');
  });
});