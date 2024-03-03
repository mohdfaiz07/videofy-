import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js';


const connectDB = async ()=>{
    try {
     const dbConnection =  await mongoose.connect(`${process.env.DB_URI}/${DB_NAME}`)

       console.log(`mongodb connected !! db host ${dbConnection}`)
        
    } catch (error) {
        console.log(` mongodb connection failed : ${error}`)
        throw error;
    }

}

export default connectDB;