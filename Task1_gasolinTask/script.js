 
// function hello() {
//     alert("Hello my name is Rajeev");
//     whoareyou();
// }


// function whoareyou(){
//   let yourName =  prompt("what is your name?")
//   greeting(yourName);
// }

// function greeting(name){
//     document.write(name);
// }

// hello();

function calculate(){
    let priceOfGasolin = (document.getElementById("price").value);
    let totalMoney = (document.getElementById("money").value);
   let answer = document.getElementById("answer");

   /* if possible donot use innerHTML nor innerText
   answer.innerHTML = money/price.
   answer.innerText
   */
   answer.textContent =Math.floor( totalMoney/priceOfGasolin ) ;
  condition.textContent= answer.textContent>=10 ? "good, you can escape now": "Ups, you have to stay here."

}

