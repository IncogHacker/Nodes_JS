

const path= require("path");

const MakeApi_Structure= path.join("Main_Folder","Location","City_Name","End")
console.log(MakeApi_Structure);//Main_Folder\Location\City_Name\End

const p=path.parse(MakeApi_Structure);
const r= path.resolve(MakeApi_Structure);
const e= path.extname(MakeApi_Structure);
const b=path.basename(MakeApi_Structure);
const d=path.dirname(MakeApi_Structure);

let Store_All_info={

    parse:p,
    resolve:r,
    extname:e,
    basename:b,
    dirname:d
}

console.log(Store_All_info);


// {

//   parse: {
//     root: '',
//     dir: 'Main_Folder\\Location\\City_Name',
//     base: 'End',
//     ext: '',
//     name: 'End'
//   },

//   resolve: 'c:\\Users\\risha\\Desktop\\Node & Express JS\\Main_Folder\\Location\\City_Name\\End',
//   extname: '',
//   basename: 'End',
//   dirname: 'Main_Folder\\Location\\City_Name'
// }