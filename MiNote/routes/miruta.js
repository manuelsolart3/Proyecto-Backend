import express from "express";
import {getAllapdz , getApdz ,createApdz, updateApdz , deleteApdz} from "../controllers/MiControlador.js";
const router = express.Router();

router.get('/' , getAllapdz)
router.get('/:id' , getApdz)
router.post('/' , createApdz)
router.put('/:id' , updateApdz)
router.delete('/:id' , deleteApdz)

export default router;




//que es un crud