import mongoose from "mongoose"
import dotenv from "dotenv";
import colors from "colors";
import User from "./models/user.model.js";
import users from "./data/user.data.js";
import connectDB from "./config/db.js";


dotenv.config();

connectDB();


const importData = async() => {
    try {
        // First Flush DataBase
        await User.deleteMany();
        // then Insert Users
        await User.insertMany(users);
        // Everything Went well
        console.log('Data successfully imported'.green.inverse);
        process.exit();

    } catch (error) {
        console.log(`Data import failed ${error.message}`.red.inverse);
        process.exit(1);
    }
}


const destroyData = async() => {
    try {
        // Flush DataBase
        await User.deleteMany();
        // Everything went well
        console.log('Data successfully destroyed'.green.inverse);
        process.exit();

    } catch (error) {
        console.log(`Destruction failed ${error.message}`.red.inverse);
        process.exit(1);
    }
}

if (process.argv[2] === '-d') {
    destroyData();
} else {
    importData();
}