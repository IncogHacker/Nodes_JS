//Agregate imporst and Exports
//! Aggregate export" means you're re-exporting everything from one file through another — like a central hub mean all things together -- that is all function that it stores export to another file also it re exports

// export const greet = () => console.log("Hi");
// export const sayBye = () => console.log("Bye");

// export * from './helpers.js';
// Then you can import like:

// import { greet, sayBye } from './index.js';


// Agrregator file 
// The aggregate file (also called a barrel file) is used to combine and re-export modules from multiple files so you can import everything from one place.
export * from './file_Exports_Main.js';