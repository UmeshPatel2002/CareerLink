import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"
import userRouter from "./routes/user.routes.js"
import companyRouter from "./routes/company.routes.js"
import jobRouter from "./routes/job.routes.js"
import applicationRouter from "./routes/application.routes.js"
import dotenv from 'dotenv'
dotenv.config();

const app=express();

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true,
}))

// app.use(cors({
//     origin: function (origin, callback) {
//         callback(null, true);  // Allow all origins, including unknown
//     },
//     credentials: true
// }));


app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended: true, limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser());


app.use("/api/v1/user",userRouter)
app.use("/api/v1/company",companyRouter)
app.use("/api/v1/job",jobRouter)
app.use("/api/v1/application",applicationRouter)


export {app}
