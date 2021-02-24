let submit = document.getElementById("submit");



submit.addEventListener("click", get)
/**function get() count how many days in between current dat and event date */
function get (){

    let endDate = document.getElementById("end-date").value;
    let eventName = document.getElementById("event-name").value;
    let eventdate = document.getElementById("eventdate");
    currentDate = new Date();
    eventDate = new Date(endDate);  
    
var one_day=1000*60*60*24;
//console.log(one_day);
let calculatedate = (Math.ceil((eventDate.getTime()-currentDate.getTime())/(one_day)));

eventdate.textContent =`The date remaining for ${eventName} is ${calculatedate} days`;
/*
let count = 0;
for ( let i = 0; i < calculatedate; i++ ) {

    if (currentDate.getDay() === 0 && currentDate.getDay() === 6){
       count ++;

    }
    console.log(calculatedate - count);
    }*/


}
/*
function businessDayCount() {
    let count = 0;

    if ()
}
var cmas=new Date(today.getFullYear(), 11, 25);
if (today.getMonth()==11 && today.getDate()>25) 
{
cmas.setFullYear(cmas.getFullYear()+1); 
}  
var one_day=1000*60*60*24;
console.log(Math.ceil((cmas.getTime()-today.getTime())/(one_day))+
" days left until Christmas!");
 */
