import { Router } from "express";
import { createGroup, createfixture,getfixture, getGroup, updatefixture,adddate } from "../controller/group.controller.js";




const router = Router()
router.post('/group', createGroup)
router.get('/group/:name', getGroup)

router.post('/createfixture',createfixture)

router.get('/',getfixture)
router.patch('/:id',updatefixture)
router.put('/adddate',adddate)





export default router;