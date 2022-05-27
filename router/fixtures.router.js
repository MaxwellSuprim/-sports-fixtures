import { Router } from "express";
import { createGroup, createfixture,getfixture, getGroup, updatefixture } from "../controller/group.controller.js";




const router = Router()
router.post('/group', createGroup)
router.get('/group/:name', getGroup)

router.post('/createfixture',createfixture)

router.get('/',getfixture)
router.patch('/:id',updatefixture)




export default router;