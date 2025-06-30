

const http = require("http")

const port = 3000

const Server = http.createServer((req, res)=>{

    if(req.url == "/")
res.write("Hi my name is Rishabh Singh")
res.end()

})







Server.listen(port, () => {


    console.log(`Server is starting ${port}`)
})