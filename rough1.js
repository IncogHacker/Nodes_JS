const EventEmiter = require('events');




const object = new EventEmiter();

// console.log(object)


object.on('Callfunc', ((curr) => {

    console.log(curr)

    curr.map((current) => {

        setTimeout(() => {
            console.log(current)
        }, 2000);

    })

}))

// object.emit('Callfunc', 'logout')
// object.emit('Callfunc', 'login')

object.emit('Callfunc',["logout","login","rishabh"])