import { Router } from "express";

import { displayLoginPage, processLoginPage } from "../controllers/author.controller.server.js";
const router = Router();

router.get('/login', displayLoginPage);
router.post('/login', processLoginPage);

export default router;