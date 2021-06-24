import mongoose from "mongoose";

const empPointsSchema = new mongoose.Schema({
  name: String,
  points: Number,
});

const EmpPoints = mongoose.model("EmpPoints", empPointsSchema);

export default EmpPoints;
