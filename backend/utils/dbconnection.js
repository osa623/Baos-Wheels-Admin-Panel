import mongoose from "mongoose";
import config from "../config/configs.js";

let database;

const connect = async () => {
    const MONGODB_URL = config;

    if(database) return;

    mongoose.connect(MONGODB_URL)
    .then((connection)=> {
        database = connection;
        console.log("Database has synced");
        
    })

    .catch((err) =>{
        console.log('DataBase is not connected properly');
    });
};

export { connect };