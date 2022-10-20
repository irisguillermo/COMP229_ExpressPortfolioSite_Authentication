import { Router } from "express";

import {  processBusinessAddPage, 
    ProcessBusinessDelete, 
    processBusinessEditPage, 
    showBusinessAddPage, 
    showBusinessEditPage, 
    showBusinessList
} from "../controllers/business.controller.server.js";

const router = Router();

router.get('/business-list', showBusinessList);
router.get('/business-add', showBusinessAddPage);
router.post('/business-add', processBusinessAddPage);
router.get('/business-edits/:id', showBusinessEditPage);
router.post('/business-edits/:id', processBusinessEditPage);
router.get('/business-delete/:id', ProcessBusinessDelete);





export default router;