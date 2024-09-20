import express from 'express'
import upload from '../Utilities/multer.js'
import { login, registerUser } from '../controller/userController.js'
const router = express.Router()

router.post('/register',upload.single('profile'), registerUser)
router.post('/login', login)

export default router