import express from "express";
import {
  postVoucher,
  getVouchers,
  deleteVouchers,
} from "../controller/voucher.controller.js";

const router = express.Router();

router.post("/vouchers", postVoucher);
router.get("/vouchers", getVouchers);
router.delete("/vouchers/:voucherId", deleteVouchers);

export default router;
