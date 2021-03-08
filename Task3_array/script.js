let car = {

    type : "Audi",
    year : 2000,
    ownerName: "Rajeev",
    city : "Espoo",
    /*calcAge : function() {
        this.age = 2021 - this.year;
        return this.age;

    },*/
    calcAge:()=>(2021-car.year)
}
console.log(car);
console.log(car.year);
console.log(car.city);
car.city = "Helsinki";
console.log(car.city);

car.color = "Red";
console.log(car);
car.color = "Blue";
console.log(car);

delete car.city;
console.log(car);

let text = document.querySelector("p");
text.textContent= `My car is  ${car.calcAge()}  years old and type is :${car.type} `;

console.log(car.calcAge());

function Student(firstName, lastName, age) {
    this.firstName= firstName;
    this.lastName = lastName;
    this.age = age;
}

var student1 = new Student("Rajeev", "Sah", 35);
var student2 = new Student("John", "Kat", 45);

console.log(student1, student2);
text.textContent= `Students -  ${student1.firstName}  and ${student2.firstName} `;

