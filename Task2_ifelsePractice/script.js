function calculate(){
    let userAge = Number(document.getElementById("age").value);
    let answer = document.getElementById("check");
   let result = userAge < 18 ? " too young":
    userAge <= 27 ? " right for military service":
    userAge <= 41 ? " reserve for military":
    userAge <= 55 ? " in backup for military":
    " too aged for military";
    console.log(result);
    answer.textContent = "You are " + result;
}

let result2;
function sum(){
    let firstNumber = Number(document.getElementById("num1").value);
    let secondNumber = Number(document.getElementById("num2").value);
    let thirdNumber = Number(document.getElementById("num3").value);
    let sumResult = document.getElementById("print");
    
    if (firstNumber && secondNumber && thirdNumber  >= -1) {
         result2 = (firstNumber + secondNumber +thirdNumber) + " and multiplication is " + (firstNumber * secondNumber *thirdNumber);
        return sumResult.textContent = result2;
    }
    else if (firstNumber && secondNumber && thirdNumber < 0) {
        return sumResult.textContent = "Only negative numbers";
    }
    else if (firstNumber >= 0 || secondNumber >= 0 || thirdNumber >= 0){
        return sumResult.textContent = (firstNumber + secondNumber +thirdNumber);

    }
    
    
}
function oddEvenNumber(){
    let oddEvenResult = document.getElementById("printOddEvenNumber");
    let number = Number(document.getElementById("oddOrEven").value);
    let result3 = number >= 0 && number % 2 == 0? "The number is even":
    number >= 0 && number % 2 !== 0 ? "The number is odd": "The number is negative";
    return oddEvenResult.textContent = result3;
    number;
}

function bmi(){
    let weight = Number(document.getElementById("weight").value);
    let height = Number(document.getElementById("height").value);
    let bmIResult = document.getElementById("bmiResult");
    let bmIndex = weight /(height/100)**2;
   let result5= bmIndex <= 18.5 ? "Underweight":
    bmIndex <= 24.9 ? "Normal of Healthy weight":
    bmIndex <= 29.9 ? "Overweight": "Obese";
    
    return bmIResult.textContent = result5;
    
}