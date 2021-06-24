import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import voucherRoutes from "./routes/voucher.routes.js";
import empPointsRoutes from "./routes/emppoints.routes.js";
import dotenv from "dotenv";
import dirname from "./lib/pathhelpers.js";
import path from "path";

const __dirname = dirname(import.meta.url);

dotenv.config();

const connectionString =
  process.env.DB_CONNECTION || "mongodb://localhost:27017/bonusvouchers";
mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const server = express();

server.use(cors());
server.use(express.json());

server.get("/health", (req, res) => {
  res.json({ status: "Server is running!" });
});

server.use(voucherRoutes);
server.use(empPointsRoutes);

server.use(express.static(path.join(__dirname, "../client/build")));
server.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});

const port = process.env.PORT || 4000;
server.listen(port);
