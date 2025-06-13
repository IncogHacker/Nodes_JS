
const http = require("http")

const PORT=4000;

const Create_Server= http.createServer((req,res)=>{

    if(req.url==="/")
    {
        res.setHeader("Content-Type","text/plain")//server get to know kisme likha gya ya type kya hai

//  It tells the browser what kind of content is being sent in the response.

// "Content-Type" → Name of the header.

// "text/plain" → Means you're sending plain text (not HTML, JSON, etc).

        res.write(" This Section IS About")
        res.end();
    }

    if(req.url==="/Contact")
    {
        res.setHeader("Content-Type","text/html")
        res.write("<h1>This is Contact Page</h1")
        res.end();
    }
})



//Now Running The server

Create_Server.listen(PORT, ()=>{

    console.log(`Startinng A Server${PORT}`)

})

