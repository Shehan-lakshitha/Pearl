import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import tourRoute from './routes/tour.js'
dotenv.config()


const app=express()
const port =process.env.PORT || 8000;
// database connection
mongoose.set("strictQuery",false);
const connect = async()=>
{
    try {
        await mongoose.connect(process.env.MONGO_URI,{
        useNewUriParser:true,
        useUnifiedTopology:true
        })
        console.log("MongoDB database connected");
    } catch (error) {
        console.log("MongoDB database not connected");
    }
}
//FOR TESTING
/*app.get("/",(req,res)=>{
    res.send("api is workind");
});*/

app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use('/tour',tourRoute);

app.listen(port,()=>
{
    connect();
    console.log("dilini",port);
})