import mongoose from "mongoose";

const voucherSchema = new mongoose.Schema({
  vouchertype: String,
  voucherpartner: String,
  vouchervalue: Number,
  vouchercurrency: String,
  neededpoints: Number,
});

const Voucher = mongoose.model("Vouchers", voucherSchema);

export default Voucher;
