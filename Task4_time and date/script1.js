
let count = 0;

for ( let i = 0; i <= 10; i++ ) {
    var future = new Date(); //get current date
    let date = (new Date(future.setDate(future.getDate() + i))); //increase day by i
    console.log(date); //print increase date
    let day = (date.getDay()) //this will get day from the date 
    console.log(day)
    if (day === 0 || day === 6) //it will chaeck sunday and saturday
        {
        count ++; //if found sunday and saturday count will increase
        }
    }
console.log(count);

