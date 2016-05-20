$(document).ready(function(){

  // homepage
  $("#login").hide();
  $("#new-user").hide();

  $("#new-user-button").click(function(){
    // console.log("new user button has been clicked !")
    $("#new-user").animate({
            height: 'toggle'
        });
    $("#login").hide();
  })

  $("#login-button").click(function(){
    // console.log("login button has been clicked !")
    $("#login").animate({
            height: 'toggle'
        });
    $("#new-user").hide();
  })


  // all tweets page



  // sort tweets by timestamp



})
