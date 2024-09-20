import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/database.js'
import userRouter from './routes/userRoutes.js'
dotenv.config()

const port = process.env.PORT
const app = express()
app.use(express.json())
app.use(userRouter)

app.listen(port,async()=>{
    await connectDB()
    console.log(`server listening on port: ${port}`)
});