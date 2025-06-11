
///Synchronous Method

const fs= require("fs");


//! fs.writeFileSync

 let File_Name= "App.text"

let store_file =fs.writeFileSync(File_Name,"This is The first file Created", 'utf-8');

console.log(store_file);// if i do this the we se file is created name of App.text

// --------------------------

// we here using path

const path= require("path");

const File_path= path.join(__dirname,File_Name);//dirname currnet folder path

console.log(__dirname);//c:\Users\risha\Desktop\Node & Express JS\NodeJs\Inbuilt Modules in Nodes\FS_Module

 console.log(File_path);//--\Users\risha\Desktop\Node & Express JS\NodeJs\Inbuilt Modules in Nodes\FS_Module\App.text



 //!fs.readFileSync()

//  const Read_File= fs.readFileSync(File_path,'utf-8');//if we dont use utf-8 then i got output in buffer bytes or any format like in which we need data it gives in buffer format if not use format or option

 const Read_File= fs.readFileSync(File_Name);//we can also use File_path here
 console.log(Read_File.toString());//This is The first file Created


//!fs.appendFileSync() --- Update


const update_file= fs.appendFileSync(File_Name,"\n Here after the Update we get this dataaa", 'utf-8');

// console.log(update_file);



//! fs.unlinkSync() --- Delete the file

// const delete_File= fs.unlinkSync(File_Name);
// console.log(delete_File);//this delet the file



//!fs.renameFilesync

const New_File_Name="After_rename.txt";

// const newfile_path= path.join(__dirname, New_File_Names)

const New_path=fs.renameSync(File_Name,New_File_Name);

console.log(New_path);