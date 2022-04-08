import { Router } from "express";
import HomeController from "../src/controller/homeController";

const router = Router();

const controller = new HomeController();

router.get('/', controller.index);

export default router;