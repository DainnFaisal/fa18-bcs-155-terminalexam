$(function () {
   $("#signupform").hide();
   $("#addBtnrecord").hide();
   $(".btn-danger").hide();
  
  showMatchData();
   $("#user").on("click", ".btn-danger", deleteData);
   $("#Signup").click(showsignup);
   $("#submit").click(addUser);
   $("#loginsubmit").click(addUser);
  $("#addBtnrecord").click(addData);
  $("#submit").click(showMatchData );
  $("#loginsubmit").click(showMatchData);
});


function addData() {
  $("#signupform").hide();
  var City = $("#City").val();
  var Date = $("#Date").val();
  var TeamA = $("#TeamA").val();
  var TeamB = $("#TeamB").val();
  console.log(City);
  $.ajax({
    url: "http://localhost:4000/api/matches/",
    method: "PUT",
    data: { City, Date,TeamA,TeamB },
    success: function (response) {
      console.log(response);
      location.reload();
    },
  });
}




function deleteData() {
  $("#signupform").hide();
  var btn = $(this);
  var parentDiv = btn.closest(".users");
  let id = parentDiv.attr("data-id");
  console.log(id);

  $.ajax({
    url: "http://localhost:4000/api/matches/" + id,
    method: "DELETE",
    success: function (response) {
    location.reload();
    },
  });
}
function showMatchData() {
  $("#signupform").hide();
  $.ajax({
    url: "http://localhost:4000/api/matches",
    method: "GET",
    success: function (response) {
      console.log(response);
      var temp = $("#user");
      temp.empty();
      for (var i = 0; i < response.length; i++) {
        var rec = response[i];
        temp.append(
          `<div class="d-flex justify-content-center users" data-id="${rec._id}">
          <h2>City:</h2><h3>${rec.City}<p>  ${rec.Date}<p> ${rec.TeamA} vs ${rec.TeamB}</a> 
          <button class="btn btn-danger btn-sm float-right">Delete </button></br>
          
          `
          );
      
 
        }
    },
  });
}







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
function ValidateUser() {
  var Email = $("#loginEmail").val();
  var Password = $("#loginPassword").val();
  console.log(Email);  
  $.ajax({
    url: "http://localhost:4000/api/users/login",
    method: "POST",
    data: { Email,Password },
    success: function (response) {
      console.log(response)
      $("#addBtnrecord").show();
      $(".btn-danger").show();
    },
  });
}





