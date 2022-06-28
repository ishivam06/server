require("dotenv").config();
const express= require("express");
const app=express();
const connectDB = require("./db/conn");
const port=8005;
connectDB();
app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
    
});