import app from "./app.js";
import connectDB from "./db/db.js";

import dotenv from "dotenv"; 
dotenv.config();


connectDB().then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`server is running at ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("mongo db error is ",err);
})