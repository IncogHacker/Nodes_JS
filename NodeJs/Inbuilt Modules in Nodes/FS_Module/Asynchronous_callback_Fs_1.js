
//? Both start "immediately", but because:

//? fs.writeFile(...) (with callback) is asynchronous

//? callingAsync() (with await) is also asynchronous

//? The JavaScript event loop schedules them — they don't block each other

//?🔁 But inside your code, the order depends on which async function finishes first.


const { error } = require("console");
// const fs = require("fs/promises");

const fs = require("fs");//If you're using fs with callbacks:

const path = require("path");


//!I used this Asynchronous Way  to create file 

// let callfucn= async()=>{//fucntion made asynchronus and use of await 

// try{
//     const File_name= "Asynchronous_1_File.txt";
//     const Create_File=await fs.writeFile(File_name,"here we create File using asynchronous Function" ,'utf-8');

//     console.log(Create_File);;
// }
// catch(error){

//     console.log(error);
// }

// }

// callfucn();


// !-----------------------------------------------------------------------------------

//?Create File

const New_file = "Asynchronous_Callback_.txt"

const Store_File = fs.writeFile(New_file, "This is Asynchronouse File code", "utf-8", (err) => {

    // console.log(Store_File);//gives undefined
    if (err)

        console.log(err);


    else
        console.log("File is saved");

});




const Path_Main = path.join(__dirname, New_file);
console.log(Path_Main);




// -------------------------------------------------------------------------------------------
//! Read_file


const Path_M = fs.readFile(Path_Main, 'utf-8', (err, data) => {

    if (err) console.log(err);
    else console.log("File is readed Successfully",data);

    // console.log(Path_M);//This gives undefined


});



//! or We can Also read file like this  using promise like async and await

// let callingAsync= async () => {
//     try {

//         const store = await fs.readFile(Path_Main,"utf-8");
//         console.log("Gives the content-----",store);
//     }
//     catch (err) {

//         console.log(err);
//     }

// }

// callingAsync();

// -------------------------------------------------------------------------------------------


//!update file or appendfile




const Update_file = fs.appendFile(Path_Main, "\n--This is updated or append", (err) => {

    if (err) console.log(err);

    else
        console.log("Updated File Sucessfully");


});



// !delete File or unlink

// fs.unlink(Path_Main, (err) => {


//     if (err)
//         console.log(err)
//     else console.log("Deleted")
// });

