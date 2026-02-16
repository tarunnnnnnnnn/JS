// function response(user){
//     console.log(user);
//     console.log(user.name);
//     console.log(user.email);
// }

// // passing object to a function 


//     const user={
//         name:"John",
//         email:"john@gmail.com",
//         role:"user",
//     };
//  response(user)


 // now destructuring:

 function response({name,email,role}){
    console.log(name);
    console.log(email);
    console.log(role);         // using destructuring 
}

  const user={
        name:"John",
        email:"john@gmail.com",
        role:"user",
    };
 response(user)



