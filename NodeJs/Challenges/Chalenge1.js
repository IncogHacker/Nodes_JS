//! just doing Emit and on  

//*? Create a program using Node.js EventEmitter that:


const EventEmitter= require("events"); 

// Creating a instance 
const object = new EventEmitter();


//Here on act as a listener 

object.on("greet",(Arguments_pass)=>{

    console.log(Arguments_pass);//[ 'Logout', 'Login', 'Purchase', 'Profile_Update' ]

    Arguments_pass.map((current)=>{

        console.log(current);
    })

})



//! Calling a Function or passing a parameter
// object.emit("greet","Logout"); //? Event ,Argument
// object.emit("greet","Login");
// object.emit("greet","Purchase");
// object.emit("greet","Profile_Update");


//!We can also Emit like this
object.emit("greet",["Logout","Login","Purchase","Profile_Update"])