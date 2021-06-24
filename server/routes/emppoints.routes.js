import express from "express";
import {
  postEmpPoints,
  getEmpPoints,
  subtractVoucherPoints,
} from "../controller/emppoints.controller.js";

const router = express.Router();

router.post("/emppoints", postEmpPoints);
router.get("/emppoints", getEmpPoints);
router.put("/emppoints/:employeeId", subtractVoucherPoints);

export default router;
