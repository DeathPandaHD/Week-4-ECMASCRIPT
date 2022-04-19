
//? Const and let

//! Var:
    //* This keyword is used to declare variable globally. If you used this keyword to declare 
    //*   variable then the variable can accessible globally and changeable also.
    //*     It is good for a short length of codes, if the codes get huge then you will get confused. 
//! For:
    //* This keyword is used to declare variable locally. 
    //*   If you used this keyword to declare variable then the variable can accessible locally and it is changeable as well. 
    //*     It is good if the code gets huge. 
//! Const:
    //* This keyword is used to declare variable locally. 
    //*   If you use this keyword to declare a variable then the variable will only be accessible within 
    //*     that block similar to the variable defined by using let and difference between let and const is 
    //*       that the variables declared using const values can’t be reassigned. So we should assign the value 
    //*         while declaring the variable.

var x=19;
{
    let x=2;
}

const pi = 3.14159

console.log (pi)

//!  pi=6;

//!  console.log (pi)

//? Template Literals:
//*  Template literals are literals delimited with backtick (`) characters, allowing for multi-line strings, 
//*    for string interpolation with embedded expressions, and for special constructs called tagged templates.

///*  Template literals are sometimes informally called template strings, because they are used most commonly for string interpolation
//*    (to create strings by doing substitution of placeholders). However, a tagged template literal may not result in a string;
//*      it can be used with a custom tag function to perform whatever operations you want on the different parts of the template literal.

let mystring = `Hello
world
my name
is cruz.`;

console.log ( mystring );

let anoutherstring ='hello\nworld \nmy name \nis cruz.'; //* This string is the same as the other but its more dificult to read

console.log (anoutherstring);

console.log(`six times five = ${5 * 6}`);

//? Arrow functions

//* An arrow function expression is a compact alternative to a traditional function expression,
//*   but is limited and can't be used in all situations.

//* There are differences between arrow functions and traditional functions,
//*   as well as some limitations:

//* Arrow functions don't have their own bindings to this, arguments or super,
//*  and should not be used as methods.

//* Arrow functions don't have access to the new.target keyword.

//* Arrow functions aren't suitable for call, apply and bind methods, 
//*   which generally rely on establishing a scope.

//* Arrow functions cannot be used as constructors.

//* Arrow functions cannot use yield, within its body.


let createFullName = (firstName, lastName) => `${firstName} ${lastName}`;


let somefunction = (a,b) => {
    let result = '';
    for (let i = 0; i < b; i++) {
       
        result += a;
        
    }
    return result
};


console.log(createFullName('Cruz','Garcia'));

console.log(somefunction('Hello' , 3));

//? Promises

//* A Promise is an object representing the eventual completion or failure of an asynchronous operation.
//* Since most people are consumers of already-created promises, 
//* this guide will explain consumption of returned promises before explaining how to create them.

//* Essentially, a promise is a returned object to which you attach callbacks, 
//* instead of passing callbacks into a function.

function handleEvent(value) {
    console.log(value);
}
function handleError(err) {
    console.error(err)
    
}

doSomethingThingThatReturnsAPromise()
    .then(handleEvent)
    .catch(handleError)

