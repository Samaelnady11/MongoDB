import { Router } from "express";
import * as controller from "./logs.controller.js";

const router = Router();

router.post("/logs", controller.addLog);

export default router;