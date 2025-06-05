

// console.log(add(5,10)) //if we do like this it will give error says Add is not defined

// after  file-one exports in file-two  we get the add through require..


//! Method Used Common Js
const add=require("./file-Export.js");//This is common js method to import code (recive ) from another file called module import
console.log(`This will work after export and require so output is --- ${add(5,10)}`)