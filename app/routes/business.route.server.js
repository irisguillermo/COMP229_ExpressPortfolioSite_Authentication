import { Router } from "express";

import { showBusinessList, showBusinessUpdatePage } from "../controllers/business.controller.server.js";

const router = Router();

router.get('/business-list', showBusinessList);
router.get('/business-updates/:id', showBusinessUpdatePage);

export default router;