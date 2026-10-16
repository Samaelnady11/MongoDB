import { Router } from "express";

import collectionRoutes from "./collection/collection.routes.js";
import bookRoutes from "./book/book.routes.js";
import logsRoutes from "./logs/logs.routes.js";

const router = Router();

router.use("/collection", collectionRoutes);
router.use("/", bookRoutes);
router.use("/", logsRoutes);

export default router;