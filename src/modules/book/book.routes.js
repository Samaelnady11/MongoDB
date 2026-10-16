import { Router } from "express";
import * as controller from "./book.controller.js";

const router = Router();

router.post("/books", controller.addBook);
router.post("/books/batch", controller.addBooksBatch);

router.patch("/books/Future", controller.updateFutureBook);

router.get("/books/title", controller.findBookByTitle);
router.get("/books/year", controller.findBooksByYear);
router.get("/books/genre", controller.findBooksByGenre);
router.get("/books/skip-limit", controller.findBooksSkipLimit);
router.get("/books/year-integer", controller.findBooksWithIntegerYear);
router.get("/books/exclude-genres", controller.findBooksExcludingGenres);

export default router;