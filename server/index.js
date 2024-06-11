import express from "express";
import dotenv from "dotenv";
import db from "./config/dbConfig.js";
import userRoutes from "./routes/userRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import uniformRoutes from "./routes/uniformRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import mailRoutes from "./routes/mailRoutes.js";
import cors from "cors";
import path from 'path';

dotenv.config();
db();

const app = express();
const __dirname = path.resolve();

// Middleware
app.use(express.json());
app.use(cors());

// Static files
app.use(express.static(path.resolve(__dirname, "dist")));

// Routes
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/uniform", uniformRoutes);
app.use("/api/chats", messageRoutes);
app.use("/api/mail", mailRoutes);

// Catch-all route for client-side routing
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
