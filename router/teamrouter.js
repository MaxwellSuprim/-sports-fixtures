import { Router } from "express";
import { getTeams, postTeams, updateTeam } from "../controller/auth.controller.js";
import { createGroup, createfixture,getfixture, getGroup, updatefixture } from "../controller/group.controller.js";
import {picCompress} from "../controller/pic.controller.js";


const router = Router()

router.post('/', postTeams)
router.get('/', getTeams)
router.post('/group', createGroup)
router.put('/:id', updateTeam)
router.get('/group/:name', getGroup)

router.post('/createfixture',createfixture)

router.get('/getfixture',getfixture)
router.patch('/updatefixture/:id',updatefixture)
router.get('/pic',picCompress)




export default router;
