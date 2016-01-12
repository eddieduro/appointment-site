$("doccument").ready(function() {
  // initially hide .errors when page loads
  $('.error').hide();

  $("#blank form").submit(function(event) {
    // Hide errors after button is clicked
    $('.error').hide();
      var firstName = $("input#firstName").val();
        if (firstName == "") {
          $("label#firstName_error").show();
          $("input#firstName").focus();
          return false;
        }
      var lastName = $("input#lastName").val();
        if (lastName == "") {
          $("label#lastName_error").show();
          $("input#lastName").focus();
          return false;
        }
      var email = $("input#email").val();
        if (email == "") {
          $("label#email_error").show();
          $("input#email").focus();
          return false;
        }
      var date = $("input#date").val();
        if (date == "") {
          $("label#date_error").show();
          $("input#date").focus();
          return false;
        }
      var time = $("input#time").val();
        if (time == "") {
          $("label#time_error").show();
          $("input#time").focus();
          return false;
        }
        $("h1, div#appointment-section").hide();
      event.preventDefault();
  });
});
