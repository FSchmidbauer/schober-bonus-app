import { useEffect } from "react";
import styled from "styled-components";

export default function EmployeeVoucherChoice({
  onSetAllVouchers,
  allVouchers,
  onSetChosenVouchers,
  chosenVouchers,
}) {
  useEffect(() => {
    fetch("http://localhost:4000/vouchers")
      .then((result) => result.json())
      .then((apiVouchers) => onSetAllVouchers(apiVouchers))
      .then((error) => console.error(error));
  }, []);

  function chooseVoucher(clickedVoucher) {
    const chosenVoucher = allVouchers.find(
      (voucher) => voucher.index === clickedVoucher.index
    );
    // onSetChosenVouchers(...chosenVouchers, chosenVoucher);
    console.log(chosenVoucher);
  }

  return (
    <>
      <h1>GUTSCHEINAUSWAHL</h1>
      <ActionInfo>
        Wenn Du genügend Bonuspunkte hast, kannst Du Dir jetzt per Klick einen
        oder mehrere dieser Gutscheine für Dich aussuchen:
      </ActionInfo>
      <VoucherSection>
        {allVouchers.map((voucher, index) => (
          <>
            <SingleVoucher key={index}>
              <VoucherTitle>{voucher.vouchertype}</VoucherTitle>
              <VoucherValue>
                über {voucher.vouchervalue} {voucher.vouchercurrency}
              </VoucherValue>
              <VoucherPartner>von {voucher.voucherpartner}</VoucherPartner>
              <BonusPointBubble>{voucher.neededpoints} Punkte</BonusPointBubble>
              <ChooseCheckbox
                type="checkbox"
                onClick={() => chooseVoucher(voucher)}
              />
            </SingleVoucher>
          </>
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
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  place-items: center;
`;

const ChooseCheckbox = styled.input`
  border: 0.2rem solid black;
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
