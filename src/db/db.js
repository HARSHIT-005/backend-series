import mongoose from "mongoose";
import { DB_Name } from "../constants.js";

const connectDB=async()=>{
    try{
         //const connectionInstance=await mongoose.connect(`${process.env.MONGO_URL}/${DB_Name}`);
         const connectionInstance = await mongoose.connect(process.env.MONGO_URL);
            console.log("Database connected successfully:",connectionInstance.connection.host);
    }catch(err){
        console.error("Database connection error:", err);
        process.exit(1);  
    }
}

export default connectDB;