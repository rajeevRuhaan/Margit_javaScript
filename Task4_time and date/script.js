currentDate = new Date();


var one_day=1000*60*60*24; //millisecond in one day

let submit = document.getElementById("submit");
let eventName = document.getElementById("event-name").value;
let endDate = document.getElementById("end-date").value;
let printEventNameDays = document.getElementById("eventdate");
let businessdaycount = document.getElementById("businessDay")

eventDate = new Date(endDate); //event end date from user 
console.log(eventDate);
let calculatedays = (Math.ceil((eventDate.getTime()-currentDate.getTime())/(one_day)));
console.log(calculatedays);
/** Business days count */
let count = 0;

for ( let i = 0; i <= calculatedays; i++ ) {
    var future = new Date(); //get current date
    let date = (new Date(future.setDate(future.getDate() + i))); //increase day by i
    //console.log(date); //print increase date
    let day = (date.getDay()) //this will get day from the date 
    console.log(day)
    if (day === 0 || day === 6) //it will chaeck sunday and saturday
        {
        count ++; //if found sunday and saturday count will increase
        }
    }
//console.log(count);
let businessD = calculatedays- count;
console.log(businessD);
/**function get() count how many days in between current dat and event date */

function get (){
    printEventNameDays.textContent =`The date remaining for ${eventName} is ${calculatedays} days`;
    
    businessDay.textContent = `The business days left ${businessD}.`
}
submit.addEventListener("click", get)
