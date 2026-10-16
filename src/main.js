import express from "express";
import { connectDB } from "./DB/connection.js";
import collectionRoutes from "./modules/collection/collection.routes.js";
import bookRoutes from "./modules/book/book.routes.js";
import logsRoutes from "./modules/logs/logs.routes.js";

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Server is running successfully!" });
});

app.use("/collection", collectionRoutes);
app.use("/", bookRoutes);
app.use("/", logsRoutes);

app.use((req, res) => {
  res.status(404).json({
    message: `Route not found: ${req.method} ${req.originalUrl}`,
  });
});

async function startServer() {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
  }
}

startServer();