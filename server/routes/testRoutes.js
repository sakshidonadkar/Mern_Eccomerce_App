import express from 'express'
import { testController } from '../controllers/testController.js'
//router objects
const router = express.Router()

//routes
router.get('/test',testController)


export default router;