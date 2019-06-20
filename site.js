/*global $*/
var main=function(){
  function Book(url, tit, aut, rate, genre, dens, len, desc) {
    this.img_url = url;
    this.title = tit;
    this.author = aut;
    this.rating = rate;
    this.genre = genre;
    this.density = dens;
    this.length = len;
    this.description = desc;
  }

  var star_link = "pics/star.png";
  var fun = false;

  //Book Object
  var the_subtle_art = new Book("covers/the_subtle_art.jpg","The Subtle Art of Not Giving a Fuck","Mark Manson",5,"self-improvement",1,1,"This self-improvement book is a quick read, under 200 pages and not too dense. <b>Definitely</b> worth reading, although it's a little unconventional, there's some grade-A advice in here.");
  var the_worldly_philosophers = new Book("covers/worldly_philosophers.jpg","The Worldly Philosophers: ...","Robert Heilbroner",4,"Academic",3,2,"This book on economic theory was quite dense, but still entertaining. The accounts of the great men of economic theory was truly fascinating, especially the ones I thought I already knew.");
  var win_friends = new Book("covers/win_friends.jpg","How to Win Friends and Influence People","Dale Carnegie",4,"self-improvement",2,2,"This book outlines and explains ways to make positive impressions and make people like/want to help you. It makes you think about your actions a little more consciously, which is cool.");
  var omu = new Book("covers/omu.jpg","Our Mathematical Universe","Max Tegmark",5,"Academic",3,2,"This astrophysics book is a challenging read, but I think the author does a great job explaining very complicated ideas and making them understandable. Overall, it was simply mind-boggling.");
  var rdpd = new Book("covers/rdpd.jpg","Rich Dad Poor Dad","Robert Kiyosaki",4,"Financial",2,1,"This book is a pretty quick read. It's told through an interesting point of view and introduces the basics of investing in real estate and other things to build up 'passive income' that is part of a strong plan for retirement.");
  var ira = new Book("covers/ira.jpg","The Truth About Retirement Plans and IRAs","Ric Edelman",4,"Financial",3,2,"This book is a great introduction and overview of the different types of retirement plans, the value to starting early, and the basics for how to invest in those plans. It's a great first step into long-term investing.");
  var mnd = new Book("covers/mnd.jpg","The Millionaire Next Door","Thomas J. Stanley",3,"Financial",1,2,"This book is a pretty easy read and it has a very interesting concept, that many people who are millionaires achieve that just by living frugally on modest pay. It attacks some of the big falsehoods about becoming wealthy.");
  var tmm = new Book("covers/tmm.jpg","Total Money Makeover","Dave Ramsey",5,"Financial",1,2,"This book highlights many of the different problems that people get into with money and the best ways to get out of them and improve your personal financial life. It is very well written and a thought-provoking read.");
  var random_walk = new Book("covers/random_walk.jpg","A Random Walk Down Wall Street","Burton G. Malkiel",3,"Financial",3,2,"I'll admit, took me a couple tries to get through this one, but it really was very interesting. It focuses on statistics and long-term trends of the market to support holding a diversified portfolio and not turning over often.");
  var pandp = new Book("covers/pandp.jpg","Pride and Prejudice","Jane Austen",4,"Fiction",2,2,"This was one of my favorite school reading books ever. I'm not sure what I liked about it so much, but I thoroughly enjoyed this novel about early 19th century English drama.");
  var phantom_tollbooth = new Book("covers/phantom_tollbooth.jpg","The Phantom Tollbooth","Norton Juster",5,"Fiction",1,1,"Disclaimer: I haven't read this in a very long time, but plan on reading again soon. Even so, this has stuck in my head since 5th grade, the wacky characters and storyline make this very short book worth checking out.");  
  
  //Book Lists
  var top_picks = ["TOP PICKS",the_subtle_art,the_worldly_philosophers,win_friends];
  var financial = ["FINANCIAL",ira,tmm,rdpd,random_walk,mnd];
  var academic = ["ACADEMIC",the_worldly_philosophers, omu];
  var self_improvement = ["SELF-IMPROVEMENT",the_subtle_art,win_friends];
  var fiction = ["FICTION",pandp,phantom_tollbooth];
  
  function add_book(book) {
    var text = '<li><div class="book_img_container"><img class="book_img" src='+book.img_url+'></div><div class="book_title_container"><span class="centerer"></span><span class="book_title">'+book.title+'<br>By: '+book.author+'</span></div><div class="gap"></div><div class="stars_container"><span class="centerer"></span>'
    for(var i=0;i<book.rating;i++) {
      text += '<img class="stars" src='+star_link+'>';
    }
    text += '</div><div class="gap"></div><div class="review_container"><span class="centerer"></span><span class="review">'+book.description+'</span></div></li>'
    $("#top_picks_list").append(text);
  }
  
  function change_book_list (book_list) {
    $('#top_picks_list').empty();
    $('#list_header').text(book_list[0]);
    for(var i=1;i<book_list.length;i++) {
      add_book(book_list[i]);
    }
    fun = false;
  }
  
  $('#fun_mode').click(function() {
    if(fun) {
      $('.stars').attr("src","pics/star.png");
      fun = false;
    }else {
      $('.stars').attr("src","pics/apple.png")
      fun = true;
    }
  });
  
  //startup
  change_book_list(top_picks);
  
  //hover functions
  $('#financial_genre').hover(function() {$('#financial_overlay').css("opacity",".3")},function(){$('#financial_overlay').css("opacity","0")});
  $('#academic_genre').hover(function() {$('#academic_overlay').css("opacity",".3")},function(){$('#academic_overlay').css("opacity","0")});
  $('#self_improvement_genre').hover(function() {$('#self_improvement_overlay').css("opacity",".3")},function(){$('#self_improvement_overlay').css("opacity","0")});
  $('#fiction_genre').hover(function() {$('#fiction_overlay').css("opacity",".3")},function(){$('#fiction_overlay').css("opacity","0")});
  $('#top_picks_genre').hover(function() {$('#top_picks_overlay').css("opacity",".3")},function(){$('#top_picks_overlay').css("opacity","0")});

  //click functions
  $('#financial_genre').click(function(){change_book_list(financial)});
  $('#academic_genre').click(function(){change_book_list(academic)});
  $('#self_improvement_genre').click(function(){change_book_list(self_improvement)});
  $('#fiction_genre').click(function(){change_book_list(fiction)});
  $('#top_picks_genre').click(function(){change_book_list(top_picks)});
};
$(document).ready(main);
