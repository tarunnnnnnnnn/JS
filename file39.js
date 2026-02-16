//Hoisting

// console.log(name);
// var name = "John"

//java script DOes  that is hoisting so comes "undefined" sends empty  var name variable up just define it:
//  var name
//  console.log(name);
//  name = "John"

// hoisting with let and const gives error cannot access sends up hoits it but still error
// What is TDZ?

//TDZ (Temporal Dead Zone) is a time period between entering a scope and the actual declaration of a variable where the variable exists but cannot be accessed.

//Applies to let and const.

//Accessing the variable in TDZ → ReferenceError.
// console.log(name);
// let name = "John"//reference error  comes in let and const but undefined in var 

// due to hoisting function can be called anywhere thats why they can be hoisted anywhere 
// greet()
// const greet(){
//     console.log("hii");
// }


// const greet = ()=>{
//     console.log("hii");// Arrow function cannot be hoisted
// }
// // greet()
