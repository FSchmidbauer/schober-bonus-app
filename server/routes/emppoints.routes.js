import express from "express";
import {
  postEmpPoints,
  getEmpPoints,
  // giveMoreEmpPoints,
  subtractVoucherPoints,
} from "../controller/emppoints.controller.js";

const router = express.Router();

router.post("/emppoints", postEmpPoints);
router.get("/emppoints", getEmpPoints);
// router.put("/emppoints/:empId", giveMoreEmpPoints);
router.put("/emppoints/:empId", subtractVoucherPoints);

export default router;
