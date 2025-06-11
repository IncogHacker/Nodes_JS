const crypto= require("crypto"); //Import using common js
const { captureRejectionSymbol } = require("events");

// or 

// import crypto from "crypto";  import using Es Mdoule

console.log("here We get the randombytes",crypto.randomBytes(8));//<Buffer 03 50 a4 6d 7c 70 2c 64>

//This is a Buffer of 8 random bytes. A Buffer in Node.js is a special type of object for handling binary data directly in memory (outside the V8 JavaScript engine's heap).

//!  we canconvert this buffer 
 let store_randomo_bytes= crypto.randomBytes(8);
 console.log(store_randomo_bytes.toString("hex"));//b3c103838b3b4b1b hexa decimal value we can use as toke or forgot password
 console.log(store_randomo_bytes.toString("ascii"));

 console.log(store_randomo_bytes.toJSON());


//  ****************************************************


