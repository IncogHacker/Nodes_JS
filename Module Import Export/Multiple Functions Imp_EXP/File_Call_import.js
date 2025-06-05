
//Wrong Output Method

//? let addcallfunc=require("./File_one");    
//? let mulcallfunc=require("./File_one");


//? console.log(addcallfunc);// here we get 6
//? console.log(mulcallfunc);// here also get 6

// ! Why we get Same output ??

// modoule.exports is a single object or value 

// when we assign module.exports then it replaced what previously defined in the code like example define module.exports=addcallfunc so it replaced by module.exports=mulcallfucn



//! For correct Output we........

//here destructuring is using to call from object 
let {addcallfunc,mulcallfunc ,divcallfucn, subtraction,PI,name} = require("./File_Execute_export.js");



//? we can also write like this like we use in objects  
// !let obj= require("./File_Execute");
// !console.log(obj.addcallfunc(2,3));

//  After when require done his work then destructuring work in which stores the  data from file_call that is object module.exports and use in this file  like addcallfucn store (a*b) and also the mulcalfunc stores the (x*y)

console.log(addcallfunc(2,3)); //5
console.log(mulcallfunc(2,3));//6
console.log(divcallfucn(2,3));//0.6
console.log(subtraction(2,3));//-1
console.log(PI);
console.log(name);






