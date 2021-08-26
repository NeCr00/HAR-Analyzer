$(document).ready(function () {

  $.when(getUserInfo()).then(function success(data){

    $("#username").text(data.username);
    $("#email").text(data.email);
   
    $("#last_upload").text(data.last_date);
    $("#entries").text(data.num_entries);
    

    $("#profile").text(data.username +" Profile")

    $("#password1,#password2").on("keyup", function (correct) {
      var password1 = $("#password1").val();
      var password2 = $("#password2").val();
      var regularExpression =
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
  
      if (password1 != password2) {
        $("#alert1").text("Password is not the same");
        $("#alert2").text("Password is not the same");
      } else if (!password1.match(regularExpression)) {
        $("#alert1").text("Password syntax is not correct");
        $("#alert2").text("Password syntax is not correct");
      } else {
        $("#alert1").text(" ");
        $("#alert2").text(" ");
      }
    });
  
    function formValidation() {
      correct = 0;
      var password1 = $("#password1").val();
      var password2 = $("#password2").val();
      var regularExpression =
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
  
      if (
        password1 &&
        password2 &&
        password1 == password2 &&
        password1.match(regularExpression)
      ) {
        correct = 1;
      }
  
      return correct;
    }
  
    $("#submit-pass").click(function (e) {
      e.preventDefault();
      var password = $("#password1").val();
      var correct = formValidation();
      console.log(password);
      if (password && correct) {
        $.ajax({
          method: "POST",
          url: "http://localhost/User/credentials.php",
          data: {
            password: password,
            type: "password",
          },
  
          success: function (data) {
            $('#alert2').text(data);
          },
          error: function (err) {
            alert("There is an error" + er);
          },
        });
      } else {
        $('#alert2').text("Please Fill all the Fields");
      }
    });
  
    $("#submit-username").click(function (e) {
      
      e.preventDefault();
      var username = $("#username-input").val();
      
      if (username) {
        $('#alert3').text("Changing ...");
        $.ajax({
          method: "POST",
          url: "http://localhost/User/credentials.php",
          data: {
            username: username,
            type: "username",
          },
  
          success: function (data) {
            $('#alert3').text(data);
          },
          error: function (err) {
            alert("There is an error" + er);
          },
        });
      } else {
        $('#alert3').text("Please type a new Usename");
      }
    });
  
    $("#but1").click(function () {
      $("#box1").slideToggle();
    });
  
    $("#but2").click(function () {
      $("#box2").slideToggle();
    });
  
    // settimeout(function(){
    //   document.getElementById("box1").click();
    // document.getElementById("box2").click();
    // },200)
  
    document.getElementById("but1").click();
    document.getElementById("but2").click();
  
    $("#password1,#password2").on("keyup", function (correct) {
      var password1 = $("#password1").val();
      var password2 = $("#password2").val();
      var regularExpression =
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
  
      if (password1 != password2) {
        $("#alert1").text("Password is not the same");
        $("#alert2").text("Password is not the same");
      } else if (!password1.match(regularExpression)) {
        $("#alert1").text("Password syntax is not correct");
        $("#alert2").text("Password syntax is not correct");
      } else {
        $("#alert1").text(" ");
        $("#alert2").text(" ");
      }
    });
  
    function formValidation() {
      correct = 0;
      var password1 = $("#password1").val();
      var password2 = $("#password2").val();
      var regularExpression =
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
  
      if (
        password1 &&
        password2 &&
        password1 == password2 &&
        password1.match(regularExpression)
      ) {
        correct = 1;
      }
  
      return correct;
    }
    
  })





});


function getUserInfo(){
  return $.ajax({
    method: "GET",
    url:"http://localhost/User/credentials.php",
    data:{
      type:"credentials",
    },
  
    success: function(data){
      console.log(data);
    },
    error: function (err) {
      console.log(err.responseText);
    }
  })
}