

const crypto= require("crypto");


let store_hash= crypto.createHash("sha256");//sha256 is algorithm which gives random security hash

console.log(store_hash);//we get this output 

// Hash {
//   _options: undefined,
//   [Symbol(kHandle)]: Hash {},
//   [Symbol(kState)]: { [Symbol(kFinalized)]: false }
// }


//!here we see that when i use only algorithm gives hash but cant use in passwords and security soo weee ne to doo...


let store_hash_working= crypto.createHash("sha256").update("Password Change").digest("hex");

console.log(store_hash_working);//! f45b0abe1f17e1a850131d1a4e533d185fc5489e6f346e2108fc3e91c5e0f1c0

//!hash value always same when update is same 

