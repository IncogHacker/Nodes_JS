//! Objective
//* Create a program using Node.js EventEmitter that:

//? Listens for multiple types of user events (e.g., login, logout, purchase, and profile update).
//? Tracks how many times each event is emitted.
//? Logs a summary of all event occurrences when a special summary event is triggered.

//! Requirements
//? Create at least four custom events (e.g., user-login, user-logout, user-purchase, profile-update).
//? Emit these events multiple times with different arguments (e.g., username, item purchased).
//? Track and store the count of each event type.
//? Define a summary event that logs a detailed report of how many times each event was triggered.




const EventEmitter = require("events");
const object = new EventEmitter();
const fs = require("fs/promises");
const path = require("path");

let Count_File = "./Count.json";


// 💾 Save count to file
async function saveCount(count) {

    let after_update = await fs.writeFile(Count_File, JSON.stringify(count, null, 2), "utf-8");



    // null: means you want to include everything
    // 2: means you want pretty formatting with 2-space indentation
}


// ✅ Check if file exists
let Filexist = async (Count_File) => {

    try {
        await fs.access(Count_File);
        return true;
    }
    catch {
        return false;
    }




}




// ✅ Load count from file

let loadCount = async () => {

    if (await Filexist(Count_File)) {

        try {
            let store = await fs.readFile(Count_File, "utf-8");

            let Store_string = JSON.parse(store);

            return Store_string;




        }
        catch (erro) {
            console.log(erro)

        }
    }


    return {
        "User_Login": 0,
        "User-Logout": 0,
        "Profile-Update": 0,
        "User-Purchase": 0
    };

}



let Main = async () => {

    let count = await loadCount();

    console.log("recents" + count)



    object.on("User_Login", async (argument_1) => {

        count.User_Login++;
        console.log(`${argument_1}--Logged In`)
        await saveCount(count);


    })


    object.on("User-Logout", async (argument_2) => {

        count["User-Logout"]++;
        console.log(`${argument_2}`)

        await saveCount(count);




    })


    object.on("Profile-Update", async (argument_4) => {


        count["Profile-Update"]++;
        console.log(`${argument_4}--Profile Updated`)
        await saveCount(count);


    })

    object.on("User-Purchase", async (argument_3, item) => {

        count["User-Purchase"]++;
        console.log(`${argument_3} Purchase ${item}`)
        await saveCount(count);



    })
    //Printing How many Time user does the Operation 
    object.on("Summary", () => {

        console.log("\n =======EVENT- SUMMARY=======\n", count);
    })





    object.emit("User_Login", "Rishabh")
    object.emit("User-Logout", "Rishabh_Logout")
    object.emit("Profile-Update", "Rishabh")
    object.emit("User-Purchase", "Rishabh", "laptop")


    setTimeout(() => {
        object.emit("Summary");
    }, 100); // 100ms delay

}


Main();
