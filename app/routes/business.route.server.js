import { Router } from "express";

import { processBusinessAddPage, 
    ProcessBusinessDelete, 
    processBusinessUpdatePage, 
    showBusinessAddPage,
    showBusinessList,
    showBusinessUpdatePage,
} from "../controllers/business.controller.server.js";

const router = Router();

router.get('/business-list', showBusinessList);
router.get('/business-add', showBusinessAddPage);
router.post('/business-add', processBusinessAddPage);
router.get('/business-delete/:id', ProcessBusinessDelete);
router.get('/business-updatepage/:id', showBusinessUpdatePage);
router.post('/business-updatepage/:id', processBusinessUpdatePage);


export default router;