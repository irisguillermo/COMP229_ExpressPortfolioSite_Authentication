import { Router } from "express";

import { showBusinessList } from "../controllers/business.controller.server.js";

const router = Router();

router.get('/business-list', showBusinessList);

export default router;