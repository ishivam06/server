const express= require("express");
require("dotenv").config();
const app=express();
const connectDB = require("./db/conn");
const port=8005;
connectDB();
app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
    
});
