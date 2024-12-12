import express from "express"
import dotenv from "dotenv"

dotenv.config()
const app = express()
const PORT = process.env.PORT || 50001

app.listen(5001,()=> {
  console.log("Server is running on http://localhost:"+ PORT)
})