import express from "express";
import { postVoucher, getVouchers } from "../controller/voucher.controller.js";

const router = express.Router();

router.post("/vouchers", postVoucher);
router.get("/vouchers", getVouchers);

export default router;
