import { Router } from "express";
import { displayAboutPage, displayContactPage, displayMainPage, displayProjectsPage, displayServicesPage } from "../controllers/index.controller.server.js";

const router = Router ();

router.get('/', displayMainPage);
router.get('/home', displayMainPage);
router.get('/about', displayAboutPage);
router.get('/projects', displayProjectsPage);
router.get('/services', displayServicesPage);
router.get('/contact', displayContactPage);




export default router;