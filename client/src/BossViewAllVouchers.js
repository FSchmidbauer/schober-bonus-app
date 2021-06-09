import { useState, useEffect } from "react";
import styled from "styled-components";

export default function BossViewAllVouchers({ onSetAllVouchers, allVouchers }) {
  useEffect(() => {
    fetch("http://localhost:4000/vouchers")
      .then((result) => result.json())
      .then((apiVouchers) => onSetAllVouchers(apiVouchers))
      .then((error) => console.error(error));
  }, []);

  return (
    <>
      <h1>AKTUELLE GUTSCHEINE</h1>
      {allVouchers.map((voucher) => (
        <VoucherSection>
          <p>{voucher.vouchertype}</p>
        </VoucherSection>
      ))}
    </>
  );
}

const VoucherSection = styled.section``;
