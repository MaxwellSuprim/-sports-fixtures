import { Router } from "express";
import { getTeams,updateTeam,postTeams } from "../controller/auth.controller.js";


const router =Router()
router.post('/', postTeams)
router.get('/', getTeams)
router.put('/:id', updateTeam)

export default router