/*global $*/
var main=function(){
  //setup
  var decision_open = false;

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
    $('#joshua .text_box').each(function(i,obj) {
      var txt = $(this).val();
      if(txt.length > 0) {opts.push(txt);}
    });
    if(opts.length > 0) {
      $('#decision').html(opts[Math.floor(Math.random()*opts.length)]);
      if(!decision_open) {
        $('#hidden_break').css('display','block');
        $('#decision_container').css({height:"60px",transition:"height .5s cubic-bezier(.17,.89,.61,1.3)"});
      } else {
        $('#decision_container').css({height:"0px",transition:"height 0s"});
        setTimeout(function(){
          $('#decision_container').css({height:"60px",transition:"height .5s cubic-bezier(.17,.89,.61,1.3)"});
        }, 500);
      }

      decision_open = true;
    }else {
      $('#decision_container').css({height:0,transition:"height .5s cubic-bezier(.17,.89,.61,1.3)"});
      $('#hidden_break').css({display:"none",transition:".5s"});
      decision_open = false;
    }
  });
};
$(document).ready(main);
