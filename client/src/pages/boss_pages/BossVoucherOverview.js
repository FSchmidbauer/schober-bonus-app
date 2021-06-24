import { useEffect } from "react";
import styled from "styled-components";

export default function BossVoucherOverview({
  onSetVouchersOnApi,
  vouchersOnApi,
}) {
  useEffect(() => {
    fetch("/vouchers")
      .then((result) => result.json())
      .then((apiVouchers) => onSetVouchersOnApi(apiVouchers))
      .then((error) => console.error(error));
  }, []);

  return (
    <>
      <h1>AKTUELLE GUTSCHEINE</h1>
      <ActionInfo>
        Folgende Gutscheine sind im Moment für Deine Mitarbeiter verfügbar:
      </ActionInfo>
      <VoucherSection>
        {vouchersOnApi.map((voucher) => (
          <SingleVoucher>
            <VoucherTitle>{voucher.vouchertype}</VoucherTitle>
            <VoucherValue>
              über {voucher.vouchervalue} {voucher.vouchercurrency}
            </VoucherValue>
            <VoucherPartner>von {voucher.voucherpartner}</VoucherPartner>
            <BonusPointBubble>{voucher.neededpoints} Punkte</BonusPointBubble>
          </SingleVoucher>
        ))}
      </VoucherSection>
    </>
  );
}

const ActionInfo = styled.h4`
  padding: 0 2rem;
`;

const VoucherSection = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
`;

const SingleVoucher = styled.section`
  position: relative;
  margin: 1.5rem 3rem;
  border: 0.2rem solid red;
  border-radius: 3rem;
`;

const VoucherTitle = styled.p`
  padding-top: 1rem;
  font-weight: bold;
  font-size: 1.5rem;
`;

const VoucherValue = styled.p`
  margin: 0 8rem;
  padding: 1rem;
`;

const VoucherPartner = styled.p`
  font-weight: bold;
  font-size: 1.2rem;
`;

const BonusPointBubble = styled.section`
  position: absolute;
  left: 20rem;
  bottom: 11rem;
  background-color: red;
  border-radius: 1rem;
  color: white;
  padding: 1rem;
`;