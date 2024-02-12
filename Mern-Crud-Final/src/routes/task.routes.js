import {Router} from "express";
import {getTasks
     ,createTask
     ,getTask
     ,updateTask
     ,deleteTask} from "../controllers/tasks.controller.js";
import {authrequire} from "../middlewares/validateToken.js";

const router = Router()

router.get('/task', authrequire,getTasks)

router.post('/task', authrequire,createTask)

router.delete('/task/:id', authrequire,deleteTask)

router.get('/task/:id', authrequire,getTask)

router.put('/task:/id', authrequire,updateTask)

export default router 

