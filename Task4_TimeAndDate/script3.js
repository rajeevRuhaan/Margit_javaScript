let timer = document.getElementById("timer");

function timerInvoke() {
  // Update the count down every 1 second
  var x = setInterval(function () {
    var endDate = document.getElementById("end-date").value;
    // Get today's date and time
    var now = new Date().getTime();
    eventDate = new Date(endDate);

    // Find the countdown between now and the eventDate date
    var countdown = eventDate.getTime() - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(countdown / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (countdown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((countdown % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((countdown % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.getElementById("demo1").innerHTML =
      days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    // If the count down is over, write some text
    if (countdown < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "EXPIRED";
    }
  }, 500);
}

//invocation of timer
timer.addEventListener("click", timerInvoke);
