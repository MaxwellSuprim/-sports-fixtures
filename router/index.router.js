import { Router } from "express";

import fixtures from "./fixtures.router.js";
import teams from "./teams.router.js"
const router=Router()
router.use('/team',teams)
router.use('/fixture',fixtures)

export default router