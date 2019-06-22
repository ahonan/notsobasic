/*global $*/
var main=function(){
  //setup
  
  
  //click fns
  $('#minus').click(function() {
      if($('.option').length > 2) {
          $('#joshua li:last-child').remove();
      }
  });
  
  $('#plus').click(function() {
      $('#joshua').append('<li class="option"><input class="text_box" placeholder="Fill me in please"><span class="underliner"></span></li>');
  });
  
  $('#decide').click(function() {
    var opts = [];
    $('.text_box').each(function(i,obj) {
      var txt = $(this).val();
      if(txt.length > 0) {opts.push(txt);}
    });
    if(opts.length > 0) {
      var decision = opts[Math.floor(Math.random()*opts.length)];
      $('#hidden_break').css('display','block');
      $('#decision').html(decision);
      $('#decision_container').css({"height":"60px","transition":"height .5s cubic-bezier(.17,.89,.61,1.3)"});
    }
  });
};
$(document).ready(main);