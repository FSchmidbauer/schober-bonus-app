import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import voucherRoutes from "./routes/voucher.routes.js";

const connectionString =
  "mongodb+srv://elflocogrande:ElFloco88!@cluster0.ly74u.mongodb.net/bonusvouchers?retryWrites=true&w=majority";
mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const server = express();

server.use(cors());
server.use(express.json());
server.use(voucherRoutes);

server.listen(4000);

server.get("/", (req, res) => {
  res.json({ status: "Server is running!" });
});
