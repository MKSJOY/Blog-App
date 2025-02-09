import mongoose from "mongoose";


export const dbConnection = ()=>{
    mongoose.connect("mongodb://127.0.0.1:27017/Blogging_App", {
        dbName: "Blogging_App",
    }).then(() => {
        console.log("Connected to database!");
    })
    .catch(err=>{
        console.log(`Some error occured while connecting to Database: ${err}`);
    });
}