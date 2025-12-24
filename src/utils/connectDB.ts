



import mongoose from "mongoose";


const mongoURL = process.env.MONGODB_URL!



async function connectDB() {
    try {

        if (mongoose.connection.readyState === 1) {
            console.log("Already connected to MongoDB!");
            return
        }

        mongoose.set("strictQuery", false);

        await mongoose.connect(mongoURL);
        console.log("connectDB!");

    } catch (error: unknown) {
        if (error instanceof Error) {
            console.log(error.message);
            throw error;
        }
        throw new Error("Unknown error while connecting to MongoDB");
    }
};



export default connectDB;
