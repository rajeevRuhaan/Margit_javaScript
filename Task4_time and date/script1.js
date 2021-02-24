
let calculatedate = 30;
let currentDate = new Date();
let count = 0;

console.log("current", currentDate)


for ( let i = 0; i < calculatedate; i++ ) {
    
if (currentDate.getDay() === 0 || currentDate.getDay() === 6){
      currentDate.getDate() + 1
    count ++;

    }
   console.log( currentDate.setDate(currentDate.getDate() + 1));
    console.log("Count",count, (calculatedate - count));
    }
