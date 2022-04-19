//? CallBacks

//* A callback function is a function passed into another function as an argument, 
//*   which is then invoked inside the outer function to complete some kind of routine or action.

let Username =  senthttprequest('getUser');

console.log(Username);
function logUsername(user) {
    console.log(user);
    
}

senthttprequest('getUser', logUsername)

sendhttprequest('getUser', user => console.log(user))
