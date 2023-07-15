import mongoose from "mongoose";
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import productRoutes from './routes/product-routes.js';

dotenv.config();

export const connectDB = async () =>{
 try{
    const {connection} = await mongoose.connect(`${process.env.MONGO_URL}`);
    console.log(`Database is connected with ${connection.host}`)
 }catch(err)
 {
    console.log(err);
 }
}

connectDB();
const app=express();
app.use(cors());
app.use(express.json());

app.listen(`${process.env.PORT}`,()=>{
    console.log(`Server Is Listening On Port ${process.env.PORT}`);
});

app.use("/api/products",productRoutes);