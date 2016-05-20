$(document).ready(function(){

  // homepage
  $('.login').hide();
  $('.new-user').hide();

  $('.login-btn').click(function(){
    // console.log('new user button has been clicked !')
    $('.new-user-btn').animate({
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

  // function sortTweets (selector, attrName, type){
  //   $(selector).sort(function(a,b){
  //     var contentA =parseInt( $(a).attr('data-sort'));
  //     var contentB =parseInt( $(b).attr('data-sort'));
  //     return (contentA < contentB) ? -1 : (contentA > contentB) ? 1 : 0;

  //   })

  // }



  // $('#sort-ascending').click(function(){
  //   var newOrder = sortTweets('.tweetbox', 'data-order', 'ascen')
  //    // document.getElementById("tweets").innerHTML = newOrder;
  //    console.log(newOrder, "asen new order")
  // })

  // $('#sort-descending').click(function(){
  //  var newOrder = sortTweets('.tweetbox', 'data-order', 'descen')
  // // document.getElementById("tweets").innerHTML = newOrder;

  //    console.log(newOrder, "descen new order")
  // })

  // sort tweets by timestamp



})
