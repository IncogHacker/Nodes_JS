

const os =require("os");//This line Imports all OS methods this is Common js here Es Module is not using


 console.log("Platform--",os.platform());//Platform-- win32
console.log("os_arch--",os.arch());//os_arch-- x64


//! ALL about here Memory how to get in byte MB and GB

// The memory returned by os.freemem() and os.totalmem() in Node.js refers to RAM (Random Access Memory) — not SSD or any kind of storage

 console.log("os_freemem",os.freemem());// this gives in byte

 let Memory_size=os.freemem();

 console.log(Memory_size/1024/1024);//this gives answer in MB free memory


 console.log("Total_memory",os.totalmem());//Total_memory 16870006784
 console.log("Total Memory In GB", os.totalmem()/1024/1024/1024);


 //!More Os info

 console.log("User_info",os.userInfo());

 console.log("Uptime",os.uptime());//in seconds --Uptime means how long your system (computer/server) has been running continuously without a restart.

 console.log("Uptime in hours ",Math.floor(os.uptime()/3600));


 //!homedir
 console.log("homedir ", os.homedir());

 //!Network
 console.log("Network_interface",os.networkInterfaces());//tell about all networks

//!Cpu
console.log("Cpu",os.cpus());

//!temporary directoru

console.log("temp_directory",os.tmpdir());// C:\Users\risha\AppData\Local\Temp

console.log("os_name",os.type());//os_name Windows_NT
