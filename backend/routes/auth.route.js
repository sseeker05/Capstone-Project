import express from "express"
const router = express.Router()
import { login, logout , signup } from "../controllers/auth.controllers.js"

router.post('/signup', signup)
router.get('/login',login)
router.get('/logout',logout)



export default router;