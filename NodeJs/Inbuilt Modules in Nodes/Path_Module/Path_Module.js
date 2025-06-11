const path= require("path");//This line is used in Node.js to import the built-in path module, which helps you work with file and folder paths easily.



console.log(__dirname);//c:\Users\risha\Desktop\Node & Express JS\NodeJs\Inbuilt Modules in Nodes

console.log(__filename);//c:\Users\risha\Desktop\Node & Express JS\NodeJs\Inbuilt Modules in Nodes\Path_Module.js---Jis js pe kaam kr rhe wo dedega+


//! path.join()
//It joins multiple path segments into one single normalized path.
const MakePath= path.join("Folder","Student","Data","More_data.txt");
console.log(MakePath);// 
// folder\Student\Data\More_data

// So we make the path that is --folder\Student\Data\More_data  now let see different path modules

const Path_parse= path.parse(MakePath);
//What it does: Breaks a full file path into pieces like folder, file name, extension.
//Think of it like: Splitting an address into street, city, state, zip code.

const Path_resolve= path.resolve(MakePath);
// What it does: Turns given folder/file names into a full absolute path (starting from root).
// Think of it like: Finding the full address when given directions from your current location.

const Path_extname= path.extname(MakePath);
// What it does: Gives you the file extension (like .txt or .js) from a file name.
// Think of it like: Asking "What kind of file is this?"

const Path_basename= path.basename(MakePath);
// What it does: Gives you just the file name from a full path; you can also remove the extension.
// Think of it like: Getting the name tag from a full address.

const Path_dirname= path.dirname(MakePath);
// What it does: Gives you the folder/directory part of the path, without the file name.
// Think of it like: Finding the street without the house number.


const Path_sep= path.sep;//tells in your system bacslash working or forward slash


 let Allpaths_Api_Structure={
    parse:Path_parse,
    resolve:Path_resolve,
    extname:Path_extname,
    basename:Path_basename,
    dirname: Path_dirname,
    seperator:Path_sep,// give which slash working in windows

 }
// console.log({Path_parse,Path_resolve,Path_extname,Path_basename});// we can also console like this or
console.log(Allpaths_Api_Structure); //we get output like json but its not json its look like



// Getting Individual Data
let Store= Allpaths_Api_Structure.parse;
console.log("After Parsed",Store);

// console.log(Allpaths_Api_Structure.parse);


