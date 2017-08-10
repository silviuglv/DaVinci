$(document).ready(function() {

    $('.sidebar').load("about.html");
    $('#main').load("timeline.html");

    $('#biography, #biography-lg').click(function(event) {
      event.preventDefault();
      $('#main').load("biography.html");
    });

    $('#timeline, #timeline-lg').click(function(event) {
      event.preventDefault();
      $('#main').load("timeline.html");
    });

    $('#about').click(function(event) {
      event.preventDefault();
      $('#main').load("about.html");
    });


})
