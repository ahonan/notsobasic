/*global $*/
var main=function(){
  //setup
  
//   $('.text_box').each(function(i,obj) {});
  
  //click fns
  $('#minus').click(function() {
      if($('.option').length > 2) {
          $('#joshua :last-child').remove();
      }
  });
  
  $('#plus').click(function() {
      $('#joshua').append('<li class="option"><input class="text_box" placeholder="Fill me in please"><span class="underliner"></span></li>');
  });
  
  $('#decide').click(function() {
      
  });
};
$(document).ready(main);