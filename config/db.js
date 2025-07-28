import mongoose from "mongoose";


export const connectDB = async() =>{
const MONGODB_URI = 'mongodb+srv://sunnysinha:sunny123@cluster0.fyq6jxp.mongodb.net/express'
await mongoose.connect(MONGODB_URI).then(()=>{
    console.log('Database Connected')
})

}