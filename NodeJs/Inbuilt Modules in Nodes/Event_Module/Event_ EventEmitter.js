

//here we not import or get module here we import class from Module

const EventEmitter= require("events");

// console.log(EventEmitter);


//! Here we create a Instance to call from a class means create a object from same class 
//! We create an instance (object) from a class to use its properties and methods."

const object_instance=new EventEmitter(); 
// Here, we create an object (called an instance) from the EventEmitter class.
// After creating this instance, we can use its built-in methods like .on() and .emit() to work with events.

console.log(object_instance);
//!EventEmitter is a object here and rest of them key:value
// EventEmitter {
//   _events: [Object: null prototype] {},
//   _eventsCount: 0,
//   _maxListeners: undefined,
//   [Symbol(shapeMode)]: false,
//   [Symbol(kCapture)]: false
// }



object_instance.on("listen_function",(argument,username)=>{//here we defining a Event or function

    console.log(argument , username +"---Here whenever object_instance listen fucntion or read function then it callback result");


    
});


object_instance.emit("listen_function","Passed","Rishabh Singh"); //here we calling a function or event 


//! pasing diffrent arguments as single argument pair 

object_instance.on("listen_function",(Single)=>{//here we defining a Event or function

    console.log( Single.name , Single.Argument +"---Here whenever object_instance listen fucntion or read function then it callback result")


    
});

object_instance.emit("listen_function",{name:"Rishabh Singh", Argument:"passsed"})
