var yonatan = {
    adress:{ 
    country: "israel", 
    city: "tel aviv",
    street: "allenby",
    number: 13
    },
    age: 29
};
// console.log(yonatan)  // full details

// console.log(yonatan.age) // age

// console.log(yonatan.adress)  // adress
// console.log(yonatan.adress.country)
// console.log(yonatan.adress.street)
// console.log(yonatan.adress.city)
// console.log(yonatan.adress.number);


// console.log(yonatan.age>18)// true

// console.log(yonatan.adress.street == "allenby") true

var salary= 8000;
var tax = 1.17;
var ensurance = 500;

console.log("salary after take down", salary / tax - ensurance) // sallery
;
var total = salary / tax - ensurance ;

console.log(total > 700)
total = "total salary " +  total;

console.log(yonatan, total);

function dark(){
var darkMode = document.getElementById("darkMode");
var lightMode = document.getElementById("lightMode");
lightMode == darkMode; 
}


var DarkPage = document.getElementById("darkMode");
console.log(lightMode);