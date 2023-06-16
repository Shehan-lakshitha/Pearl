import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import authRoute from './routes/auth.js'
import tourRoute from './routes/tour.js'
import userRoute from './routes/user.js'
dotenv.config()


const app=express()
const port =process.env.PORT || 8000;
// database connection
mongoose.set("strictQuery",false);
const connect = async()=>
{
    try {
        await mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true
        })
        console.log("MongoDB database connected");
    } catch (err) {
        console.log("MongoDB database not connected");
    }
}
//FOR TESTING
app.get("/",(req,res)=>{
    res.send("api is workind");
});

app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use('/auth',authRoute);
app.use('/tours',tourRoute);
app.use('/user',userRoute);
app.listen(port,()=>
{
    connect();
    console.log("dilini",port);
})