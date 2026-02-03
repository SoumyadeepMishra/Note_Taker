import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'

import noteRoutes from './routes/note.route.js'

dotenv.config()
const app = express()
const port = process.env.PORT || 4000

// DTABSE CONNECTION CODE HERE
try{
  mongoose.connect(process.env.MONGO_URL)
  console.log("Database connected successfully")
} catch (error) {
  console.error("Database connection failed", error)
}

// middleware to parse JSON requests
app.use(express.json())
app.use(cors())

// routing middleware
app.use("/api/v1/noteapp", noteRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})


