import { useState } from "react";
import styled from "styled-components";

export default function PartnerVoucherCheck({ createdVoucher }) {
  return (
    <>
      <h1>GUTSCHEIN-CHECK</h1>
      <h4>
        You created a new {createdVoucher.vouchertype} voucher of{" "}
        {createdVoucher.vouchervalue} {createdVoucher.vouchercurrency} for{" "}
        {createdVoucher.neededpoints} bonus points. Confirm?
      </h4>
    </>
  );
}
