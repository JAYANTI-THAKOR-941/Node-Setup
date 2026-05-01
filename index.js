import express from 'express';
import connectDB from './config/db.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

const PORT = 5000;

// database connection
connectDB();

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// import routes
import userRoutes from './routes/userRoutes.js';
import productRoutes from './routes/productRoutes.js'

app.use('/api/user',userRoutes);
app.use('/api/product',productRoutes);


app.get('/',(req,res)=>{
    res.send('Server is working.!!');
})



app.listen(PORT,()=>{
    console.log("server is running on http://localhost:5000")
})