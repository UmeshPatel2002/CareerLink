import connectDB from "./db/index.js";
import {app} from './app.js'
import dotenv from "dotenv"
import cors from 'cors';


dotenv.config({
    path: './.env'
})


connectDB()
.then(()=>{
   app.listen(process.env.PORT || 8000,()=>{
    console.log(`server is running at port: ${process.env.PORT}`);
   //  setInterval(()=>{
   //    fetch('http://localhost:8000/api/v1/application/send');
   //  },1000)
   })
})
.catch((err)=>{
   console.log("mongoDB connection failed",err)
})

