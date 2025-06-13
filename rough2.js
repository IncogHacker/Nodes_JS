const EventEmitter = require("events");
const object = new EventEmitter();
const fs = require("fs/promises");

let Count_File = "./Count.json";

// Save count to file
async function saveCount(count) {
    await fs.writeFile(Count_File, JSON.stringify(count, null, 2), "utf-8");
}

// Check if file exists
let fileExists = async (filePath) => {
    try {
        await fs.access(filePath);
        return true;
    } catch {
        return false;
    }
};

// Load count from file or default
let loadCount = async () => {
    if (await fileExists(Count_File)) {
        try {
            let store = await fs.readFile(Count_File, "utf-8");
            return JSON.parse(store);
        } catch (error) {
            console.log("Error reading count file:", error);
        }
    }

    return {
        "User-Login": 0,
        "User-Logout": 0,
        "Profile-Update": 0,
        "User-Purchase": 0
    };
};

let Main = async () => {
    let count = await loadCount();
    console.log("Recents:", count);

    object.on("User-Login", async (user) => {
        count["User-Login"]++;
        console.log(`${user} -- Logged In`);
        await saveCount(count);
    });

    object.on("User-Logout", async (user) => {
        count["User-Logout"]++;
        console.log(`${user} -- Logged Out`);
        await saveCount(count);
    });

    object.on("Profile-Update", async (user) => {
        count["Profile-Update"]++;
        console.log(`${user} -- Profile Updated`);
        await saveCount(count);
    });

    object.on("User-Purchase", async (user, item) => {
        count["User-Purchase"]++;
        console.log(`${user} purchased ${item}`);
        await saveCount(count);
    });

    object.on("Summary", () => {
        console.log("\n======= EVENT SUMMARY =======\n", count);
    });

    // Emit events
    object.emit("User-Login", "Rishabh");
    object.emit("User-Logout", "Rishabh");
    object.emit("Profile-Update", "Rishabh");
    object.emit("User-Purchase", "Rishabh", "Laptop");

    object.emit("Summary");
};

Main();
