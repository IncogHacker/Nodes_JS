

const EventEmitter= require("events")
const { emitWarning } = require("process")


const object= new EventEmitter()

object.on("calls",(argumen)=>{


    console.log(argumen)


})

object.emit("call","Rishabh")