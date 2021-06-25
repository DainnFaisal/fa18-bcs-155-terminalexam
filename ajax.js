$(function () {
  $("#signupform").hide();
  showMatchData();
  $("#user").on("click", ".btn-danger", deleteData);

  $("#user").on("click", ".nav-link", showMatchData);
  
  $("#addBtn").click(addData);
  
  
});


function addData() {
  $("#signupform").show();
  var Name = $("#Name").val();
  var Date = $("#Date").val();
  var TeamA = $("#TeamA").val();
  var TeamB = $("#TeamB").val();
  $.ajax({
    url: "http://localhost:4000/api/Matches/",
    method: "PUT",
    data: { Name, Date,TeamA,TeamB },
    success: function (response) {
      console.log(response);
      showMatchData();
    },
  });
}



function deleteData() {
  var btn = $(this);
  var parentDiv = btn.closest(".users");
  let id = parentDiv.attr("data-id");
  console.log(id);
  $("#footer").removeClass("fixed-bottom");
  $.ajax({
    url: "http://localhost:4000/api/Matches/" + id,
    method: "DELETE",
    success: function (response) {
    location.reload();
    },
  });
}
function showMatchData() {
  $("#signupform").hide();
  $.ajax({
    url: "http://localhost:4000/api/Matches",
    method: "GET",
    success: function (response) {
      console.log(response);
      var temp = $("#user");
      temp.empty();
      
      for (var i = 0; i < response.length; i++) {
        var rec = response[i];
        temp.append(
          `<a class="nav-link" id="fulldata"><div class="d-flex justify-content-center users" data-id="${rec._id}">
          <h3><img src="${rec.City}" alt="image"><p>  ${rec.Date}<p>Price: ${rec.Price}</a> 
          <button class="btn btn-danger btn-sm float-right">Delete </button></br>
          <button class="btn btn-warning btn-sm float-right">Update</button></br>
          `
          );
      
 
        }
    },
  });
}








