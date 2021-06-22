import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import voucherRoutes from "./routes/voucher.routes.js";
import empPointsRoutes from "./routes/emppoints.routes.js";
import dotenv from "dotenv";

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
server.use(voucherRoutes);
server.use(empPointsRoutes);

server.listen(4000);

server.get("/", (req, res) => {
  res.json({ status: "Server is running!" });
});
