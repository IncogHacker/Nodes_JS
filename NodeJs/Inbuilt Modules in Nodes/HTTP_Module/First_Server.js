
const http = require("http");//this module gives multiple method 

const server = http.createServer(); //calling method http.createServer also called EventEmitter in which we can perform operation of emit and on or addListener


// In Node.js, many core modules (like http, fs, etc.) inherit from the EventEmitter class — meaning they can emit and listen for events.



const PORT = 3000;  //Giving The Port Value ---This sets the port number your server will listen on.


//? Creating A Server 
const Server = http.createServer((req, res) => { //inside arrow function passing aargument so it is callback



//!     const server = http.createServer(function(req, res) {
//!     Still a callback function
// ! });

    // http.createServer() creates a basic HTTP server.

    // It takes a callback function that runs whenever someone sends a request to the server.

    // req: the incoming request object.

    // res: the outgoing response object.

    if (req.url === "/") {  //! req.url === "/": This checks if the client is accessing the home page.
        res.write("This is The first server I made and This Text Showing BY calling The Server");
        res.end();
    }


//     ✅ What is "/" in req.url === "/"?
//     "/" is the root path of your server — also called the home page or default route.

})




//? -Starting a Server and Binding with Port 
Server.listen(PORT, () => {

    console.log(`Starting A Server ${PORT}`);//Starting a Server 3000

})










