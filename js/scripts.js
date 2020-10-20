// Business logic


// User interface logic
$(document).ready(function() {
  $("button#day").click(function() {
    $("body").removeClass();
    $("body").addClass("day");
  });

  $("button#night").click(function() {
    $("body").removeClass();
    $("body").addClass("night");
  });
});