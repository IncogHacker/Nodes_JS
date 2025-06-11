
const { rejects } = require("assert");
const { error } = require("console");
// const fs = require("fs/promises");//use only promise
const fs =require("fs");
const path= require("path");



//! Performing CURD operation  using promises(rsolve, reject) this is Mine program 

// let Files="Asynchronous_promise_file.txt";
// let Origin_Path=path.join(__dirname,Files);
// console.log(Origin_Path);

// const Prommise_file= new Promise((resolve,reject)=>{

//     resolve(fs.writeFile(Files,"Here We Do Curd Operation Using Promises"));

// });

// Prommise_file.then((response)=>{
//   console.log(response)            //Asynchronous_promise_file.txt
// });
// Prommise_file.catch((err)=>{

//     console.log(err);
// })
// Prommise_file.finally(()=>{

//     console.log("File is created")
// })

//!Performing CURD Operation BY thapa using promises or import Fs only

let File="Asynchronous_Curd_thapa.txt";
let File_path=path.join(__dirname,File);

fs.promises.writeFile(File_path,"Here We Other way to Create File using Promiese","utf-8")
.then(console.log("File Created Succesfully"))//Asynchronous_Curd_thapa.txt
.catch((err)=>{
    consolele.log(err);
});


//Update or fs.appendFile
fs.promises.appendFile(File_path,"\nFiles are Updated or added","utf-8")
.then(()=>{
console.log("Filese are Updated");
})
.catch((error)=>{
console.log(error)
})


//Reading File 
fs.promises.readFile(File,"utf-8")
.then((data)=>{
    console.log("Reading of File-----",data);
})
.catch((error)=>{
console.log(error)
})








//! More Way or understanding Promises jis directory ke andar ho uske andar kitne files hai this method read this

// let __dir_File=__dirname;
// // console.log(__dir_File);//c:\Users\risha\Desktop\Node & Express JS\NodeJs\Inbuilt Modules in Nodes\FS_Module
// //! here we Know FS_Module me kitne files hain..

// fs.promises
// .readdir(__dir_File)
// .then((data)=>console.log(data))
// // [
// //   'After_rename.txt',
// //   'Asynchronous_Callback_.txt',
// //   'Asynchronous_callback_Fs_1.js',
// //   'Asynchronous_Promises_Fs_1.js',
// //   'Asynchronous_promise_file.txt',
// //   'File_System.js',
// //   'Synchronous_FS.js'
// // ]
// .catch((error)=>console.log(error));



//!Performing CURD Operation BY thapa using promises


