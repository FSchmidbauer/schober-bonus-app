import express from "express";
import {
  postEmpPoints,
  getEmpPoints,
} from "../controller/emppoints.controller.js";

const router = express.Router();

router.post("/emppoints", postEmpPoints);
router.get("/emppoints", getEmpPoints);

export default router;
