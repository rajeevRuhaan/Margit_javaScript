var submit = document.getElementById("submit");

/**function get() count how many days in between current dat and event date */
function get() {
  var endDate = document.getElementById("end-date").value;
  var eventName = document.getElementById("event-name").value;
  var eventdate = document.getElementById("eventdate");
  let businessdaycount = document.getElementById("businessDay");

  currentDate = new Date();
  eventDate = new Date(endDate);

  var one_day = 1000 * 60 * 60 * 24; //millisecond in one day
  //Days count for the event
  var calculatedate = Math.ceil(
    (eventDate.getTime() - currentDate.getTime()) / one_day
  );

  /** Business days count */
  let count = 0;

  for (let i = 0; i <= calculatedate; i++) {
    var future = new Date(); //get current date
    let date = new Date(future.setDate(future.getDate() + i)); //increase day by i
    //console.log(date); //print increase date
    let day = date.getDay(); //this will get day from the date

    if (day === 0 || day === 6) {
      //it will chaeck sunday and saturday
      count++; //if found sunday and saturday count will increase
    }
  }

  let businessD = calculatedate - count;

  /** print in windows eventdate and businessdaycount */
  eventdate.textContent = `The date remaining for ${eventName} is ${calculatedate} days`;

  businessdaycount.textContent = `The business days left ${businessD}.`;
}
submit.addEventListener("click", get);
