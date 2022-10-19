import { Router } from "express";

import { displayBusinessEditPage, displayBusinessLoginPage,showBusinessList, showBusinessUpdatePage, 
} from "../controllers/business.controller.server.js";

const router = Router();

router.get('/business-list', showBusinessList);
router.get('/business-updates/:id', displayBusinessEditPage);
router.get('/business-updates', showBusinessUpdatePage);


export default router;