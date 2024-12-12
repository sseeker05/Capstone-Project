import express from "express"
import dotenv from "dotenv"
import authRoutes from "./routes/auth.route.js"
import { connectDB } from "./lib/db.js"

dotenv.config()
const app = express()
const PORT = process.env.PORT || 50001


app.use("/api/auth", authRoutes)



app.listen(5001,()=> {
  console.log("Server is running on http://localhost:"+ PORT)

  connectDB()
})