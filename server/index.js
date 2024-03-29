import express from "express";
import dotenv from "dotenv";
import db from "./config/dbConfig.js";
dotenv.config();
import userRoutes from "./routes/userRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import uniformRoutes from "./routes/uniformRoutes.js";
import { authMiddleware } from "./middlewares/authMiddleware.js";
import cors from "cors";

db();
const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/uniform", uniformRoutes);
// for checking authMiddleware no other purpose
app.use("/secure-route", authMiddleware);
app.get("/secure-route", (req, res) => {
  res.send("This route is secure");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
