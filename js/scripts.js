// Business logic


// User interface logic
$(document).ready(function() {
  $("button#day-mode").click(function() {
    $(".initial").removeClass();
    $(".initial").addClass("day");
  });

  $("button#night-mode").click(function() {
    $(".initial").removeClass();
    $(".initial").addClass("night");
  });
});