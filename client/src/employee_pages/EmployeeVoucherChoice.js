import { useState, useEffect } from "react";
import styled from "styled-components";

export default function EmployeeVoucherChoice({
  onSetAllVouchers,
  allVouchers,
  onSetChosenVouchers,
  chosenVouchers,
  onSetIsEmployeeVoucherChoice,
  onSetIsEmployeeVoucherCheck,
  isThisUserOnApi,
  showPointsThisUserOnApi,
}) {
  useEffect(() => {
    fetch("http://localhost:4000/vouchers")
      .then((result) => result.json())
      .then((apiVouchers) => onSetAllVouchers(apiVouchers))
      .then((error) => console.error(error));
  }, []);

  const [isChoiceErrorMessage, setIsChoiceErrorMessage] = useState(false);

  function chooseOrUnChooseVoucher(clickedVoucher) {
    const selectedVoucher = allVouchers.find(
      (voucher) => voucher._id === clickedVoucher._id
    );
    if (chosenVouchers.some((voucher) => voucher._id === clickedVoucher._id)) {
      const remainingChosenVouchers = chosenVouchers.filter(
        (voucher) => voucher._id !== clickedVoucher._id
      );
      onSetChosenVouchers(remainingChosenVouchers);
    } else {
      onSetChosenVouchers([...chosenVouchers, selectedVoucher]);
    }
  }

  function showVoucherCheck() {
    if (chosenVouchers.length === 0) {
      setIsChoiceErrorMessage(true);
    } else {
      onSetIsEmployeeVoucherChoice(false);
      onSetIsEmployeeVoucherCheck(true);
    }
  }

  return (
    <>
      <h1>GUTSCHEINAUSWAHL</h1>
      <ActionInfo>
        Wenn Du genügend Bonuspunkte hast, kannst Du Dir jetzt per Klick einen
        oder mehrere dieser Gutscheine für Dich aussuchen. <br />
        <br />
        Aktuell verfügbar:{" "}
        <span>
          {isThisUserOnApi ? showPointsThisUserOnApi : "0"}
        </span> Punkte{" "}
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
                disabled={showPointsThisUserOnApi < voucher.neededpoints}
                type="checkbox"
                onClick={() => chooseOrUnChooseVoucher(voucher)}
              />
            </SingleVoucher>
          </>
        ))}
      </VoucherSection>
      <CheckButton onClick={showVoucherCheck}>Auswahl prüfen</CheckButton>
      {isChoiceErrorMessage && (
        <ChoiceError>
          Du musst zuerst eine Auswahl treffen, bevor Du auf diese Seite kannst.
        </ChoiceError>
      )}
    </>
  );
}

const ActionInfo = styled.h4`
  padding: 0 2rem;

  span {
    color: red;
    font-size: 2rem;
  }
`;

const VoucherSection = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  place-items: center;
`;

const ChooseCheckbox = styled.input`
  border: 0.2rem solid black;
`;

const SingleVoucher = styled.section`
  border: 0.2rem solid red;
  border-radius: 3rem;
  margin: 1.5rem 3rem;
  position: relative;
`;

const VoucherTitle = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  padding-top: 1rem;
`;

const VoucherValue = styled.p`
  margin: 0 8rem;
  padding: 1rem;
`;

const VoucherPartner = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
`;

const BonusPointBubble = styled.section`
  background-color: red;
  border-radius: 1rem;
  color: white;
  padding: 1rem;
  position: absolute;
  bottom: 11rem;
  left: 20rem;
`;

const CheckButton = styled.button`
  background-color: red;
  color: white;
  cursor: pointer;
  font-size: 1.5rem;
  padding: 1rem;
`;

const ChoiceError = styled.div`
  background-color: red;
  color: white;
  padding: 0.5rem;
`;
