

const path= require("path");
const fs= require("fs/promises");
const { error } = require("console");


let File_name="Async_await_Another_file.txt";
let Main_Path= path.join(__dirname,File_name)

console.log(Main_Path);


let callAsyncfunc= async()=>{



    try{
          ///creating A file 
        
        await fs.writeFile(Main_Path,"Storing Data of Async and await","utf-8")//file is created here++++++++++++++++++


        //Reading A File
        let store=await fs.readFile(Main_Path,"utf-8");
        console.log("After Read---",store);

        //append or update a file
        let Append= fs.appendFile(Main_Path,"\n After Append","utf-8")
        console.log("Append Succefully")

        //unlink
        // fs.unlink(Main_Path);


    }

    catch(error){

        console.log(error);

    }






}









callAsyncfunc();