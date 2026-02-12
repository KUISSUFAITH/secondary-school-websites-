import cors from "cors";
import dotenv from "dotenv";
import express from "express";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.status(200).json({ status: "ok", message: "VicssLimbe API is running" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
