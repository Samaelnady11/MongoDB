import { Router } from "express";
import * as controller from "./collection.controller.js";

const router = Router();

router.post("/books", controller.createBooksCollection);
router.post("/authors", controller.createAuthor);
router.post("/logs/capped", controller.createCappedLogs);
router.post("/books/index", controller.createBooksTitleIndex);

export default router;