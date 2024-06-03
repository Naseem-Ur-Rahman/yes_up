import mongoose from "mongoose";

const connectToMongoDB = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_DB_URI)
        console.log("DB Connected Successfully ")
    } catch (error) {
        console.log("Error Connecting to Mongo DB", error.message)
        
    }
} 

export default connectToMongoDB;