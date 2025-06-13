//! Doing Curd Operation using async and await


//these imports comes in ES module 
import path from "path"
import { fileURLToPath } from "url";
import fs from "fs/promises"



let Make_Async = async()=> {

    try{

    let File_name = "Async_Await_file.txt";

    

    const __filename = fileURLToPath(import.meta.url);
    //?console.log(__filename);//..gives url of the current module

    const __dirname = path.dirname(__filename);
    //? console.log(__dirname);//gives regular file path


    let All_files= fs.readdir(__dirname)    
    .then((data)=>{
        console.log(data);///Show all files inside the __dirname
    })


    let Full_path = path.join(__dirname, File_name);

    console.log("Full_Path---", Full_path);///Gives the Full path

    
    let Store = await fs.writeFile(Full_path, "Here We See Async and Wait how they work in curd", "utf-8")
    // console.log(Store);

    }

    catch(error){

        console.log(error);

    }

   

};


Make_Async();
