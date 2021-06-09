import Voucher from "../models/voucher.model.js";

function postVoucher(req, res) {
  const voucher = new Voucher({
    vouchertype: req.body.vouchertype,
    voucherpartner: req.body.voucherpartner,
    vouchervalue: req.body.vouchervalue,
    vouchercurrency: req.body.vouchercurrency,
    neededpoints: req.body.neededpoints,
  });
  voucher
    .save()
    .then((voucherSaved) => res.json(voucherSaved))
    .catch((error) => res.json(error));
}

function getVouchers(req, res) {
  Voucher.find().then((voucher) => res.json(voucher));
}

export { postVoucher, getVouchers };
