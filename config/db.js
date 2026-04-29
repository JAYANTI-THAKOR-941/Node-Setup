// mongodb://localhost:27017

import mongoose from "mongoose";

const connectDB = async()=>{
    try{
        await mongoose.connect('mongodb://localhost:27017/Node-DB');
        console.log('Database is connected successfully.!');
    }
    catch(err){
      console.log('Failed to connect Database.!',err);  
    }
}

export default connectDB;