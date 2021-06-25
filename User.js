$(function () {
    $("#signupform").hide();
   
    $("#Signup").click(showsignup);
    $("#submit").click(addUser);
  });



  function showsignup() {
    var temp = $("#user");
    temp.empty();
    $("#signupform").show();

  }
  
  

  function addUser() {
    var Name = $("#signupName").val();
    var Email = $("#signupEmail").val();
    var Password = $("#signupPassword").val();
    console.log(Name);  
    $.ajax({
      url: "http://localhost:4000/api/users/register",
      method: "POST",
      data: { Name, Email,Password },
      success: function (response) {
        console.log(response)
      },
    });
  }
  