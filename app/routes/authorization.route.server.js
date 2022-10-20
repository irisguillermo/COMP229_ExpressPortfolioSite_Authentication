import { Router } from "express";
import { DisplayLoginPage, ProcessLoginPage } from "../controllers/authorization.controller.server.js";

const router = Router();

router.get('/business-login', DisplayLoginPage);
router.post('/business-login', ProcessLoginPage);


export default router;