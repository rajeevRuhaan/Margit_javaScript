let formInput = document.querySelector("#inputData");
let formSearch = document.querySelector("#searchData")

 function Car( licencePlate, carMaker, carModel, price, color) {
    this.licencePlate = licencePlate;
    this.carMaker = carMaker;
    this.carModel = carModel;
    this.price = price;
    this.color = color;
}

let carArray =[]; // //new array for object
const addCar = (event) => {
    event.preventDefault();
    let licencePlate = document.getElementById("licencePlate").value;
    console.log(licencePlate);
    let carMaker = document.getElementById("carMaker").value;
    let carModel = document.getElementById("carModel").value;
    let price = document.getElementById("price").value;
    let color = document.getElementById("color").value;
    let newCar = new Car(licencePlate, carMaker, carModel, price, color);
    carArray.push(newCar);
    console.table(carArray);
    formInput.reset();
};
formInput.addEventListener("submit", addCar);

const searchCar = (event) => {
    event.preventDefault();

let licenceNumber = document.getElementById("searchLicence").value;
let text = document.querySelector("p");

if ( carArray.length == 0){
    text.textContent = "Please enter car number";

}else {
    for (let i=0; i<carArray.length; i++) {
        if ( carArray[i].licencePlate == licenceNumber) {
            text.textContent = `Licence number ${carArray[i].licencePlate}
            is ${carArray[i].carMaker} ${carArray[i].carModel} `
        }else {text.textContent = "Whaaaat???"}
    }
}
formSearch.reset();

};
formSearch.addEventListener("submit", searchCar);


