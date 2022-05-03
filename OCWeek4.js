//? Convert the following function into an arrow function. Refer to the new function as pythagoras.
//? function myFunction(num1, num2) { return Math.sqrt((num1*num2)+(num2*num2)); }


//* my solution

var a = 4;
var b = 7;


//write your code here

let pythagoras = (a,b) =>{
    return Math.sqrt((a*b)+(b*b));
}


//do not change
//for testing purposes
console.log(pythagoras(a,b));

//*instucors solution

var fs = require("fs");
var input = fs.readFileSync(process.stdin.fd, "utf-8").trim().split("\n");
var a = parseInt(input[0]);
var b = parseInt(input[1]);

//write your code here
 
let pythagoras = (num1, num2) => Math.sqrt((num1*num2)+(num2*num2)); //! no need for {} or return just simple

//do not change
//for testing purposes
console.log(pythagoras(a,b));


//? Convert the following function into an arrow function. Refer to the new function as monthlyPayment.

//* my solution
var fs = require("fs");
var input = fs.readFileSync(process.stdin.fd, "utf-8").trim().split("\n");
var a = parseInt(input[0]);

//write your code here


let monthlyPayment= (a) => a / 12

//do not change
//for testing purposes
console.log(monthlyPayment(a));

//* instructors solution

var fs = require("fs");
var input = fs.readFileSync(process.stdin.fd, "utf-8").trim().split("\n");
var a = parseInt(input[0]);

//write your code here

let monthlyPayment = (yearlyPayment) =>{
    let monthly = yearlyPayment / 12;
    return monthly.toFixed(2);
};








//do not change
//for testing purposes
console.log(monthlyPayment(a));



//? Convert the following function into an arrow function. Refer to the new function as returnNumber.

//* my solution


let returnNumber = (num) => {
   return `Your number is ${num}`;

}


//* Instructors solution

//write your code here
let returnNumber = (num) => `Your number is ${num}`;


//? Convert the following function into an arrow function. Refer to the new function as revert.
//? function myFunction(value){ return !value; }

//* my solution
let revert =(Value) => {
    return !Value  //! DOESNT NEED A RETURN STATEMENT IF CAN BE DONE ON ONE LINE!!!!!!
}

//* instructors solution

let revert = (value) => !value;

//? Convert the following function into an arrow function. Refer to the new function as returnSum.
//? function addTwoInputs(a,b) { return a+b; }

//* my solution

let returnSum = (a,b) => a+b ;

//*instructors solution

let returnSum = (a,b) => a+b;

//? Convert the following function into an arrow function. Refer to the new function as fancyAlgorithm.

var a = 15
var b = 12
var c = 13




function myfunction(num1, num2, num3) {

    let value = 0;
    for (let i  = 0; i   <num3; i ++) {
        value=(value + num2) * num1;
        
    }
    return value/(num1*(num3*10))
}

//* my solution
let fancyAlgorithm = (num1, num2, num3) => {

        let value = 0;
    for (let i  = 0; i   <num3; i ++) {
        value=(value + num2) * num1;
        
    }
    return value/(num1*(num3*10))

}


console.log(myfunction(a,b,c));

//* instrucors solution

let fancyAlgorithm = (num1, num2, num3) => {
    let value = 0;
    for(let i = 0; i < num3; i++){
        value = (value + num2) * num1;
    }
    
    return value / (num1 * (num3 * 10));
}