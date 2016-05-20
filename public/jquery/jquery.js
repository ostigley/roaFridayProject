$(document).ready(function(){

  // homepage
  $('.login').hide();
  $('.new-user').hide();

  $('.new-user-btn').click(function(){
    // console.log('new user button has been clicked !')
    $('.new-user').animate({
            height: 'toggle'
        });
    $('.login').hide();
  })

  $('.login-btn').click(function(){
    // console.log('login button has been clicked !')
    $('.login').animate({
            height: 'toggle'
        });
    $('.new-user').hide();
  })


  // all tweets page
var $divs = $('div.tweetbox')

  $('.sort-ascending').on('click', function () {
      var numericallyOrderedDivs = $divs.sort(function (a, b) {
          return $(a).find('.tweet-data').text() > $(b).find(".tweet-data").text();
      });
      $(".tweets").html(numericallyOrderedDivs);
  });

  $('.sort-descending').on('click', function () {
      var numericallyOrderedDivs = $divs.sort(function (a, b) {
          return $(a).find('.tweet-data').text() < $(b).find(".tweet-data").text();
      });
      $(".tweets").html(numericallyOrderedDivs);
  });


})
