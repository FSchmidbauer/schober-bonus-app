import { useState, useEffect } from "react";
import styled from "styled-components";

export default function EmployeeVoucherChoice({
  onSetVouchersOnApi,
  vouchersOnApi,
  onSetChosenByEmployeeVouchers,
  chosenByEmployeeVouchers,
  onSetIsEmployeeVoucherChoice,
  onSetIsEmployeeVoucherCheck,
  isThisUserOnApi,
  showPointsThisUserOnApi,
}) {
  useEffect(() => {
    fetch("http://localhost:4000/vouchers")
      .then((result) => result.json())
      .then((apiVouchers) => onSetVouchersOnApi(apiVouchers))
      .then(onSetChosenByEmployeeVouchers([]))
      .then((error) => console.error(error));
  }, []);

  const [isChoiceErrorMessage, setIsChoiceErrorMessage] = useState(false);
  const [pointsAfterVoucher, setPointsAfterVoucher] = useState(
    showPointsThisUserOnApi
  );

  function chooseOrUnChooseVoucher(clickedVoucher) {
    const selectedVoucher = vouchersOnApi.find(
      (voucher) => voucher._id === clickedVoucher._id
    );
    if (chosenByEmployeeVouchers.length === 0) {
      onSetChosenByEmployeeVouchers([
        ...chosenByEmployeeVouchers,
        selectedVoucher,
      ]);
      const subtractedPoints = pointsAfterVoucher - clickedVoucher.neededpoints;
      setPointsAfterVoucher(subtractedPoints);
    } else if (
      chosenByEmployeeVouchers.length > 0 &&
      !chosenByEmployeeVouchers.some(
        (voucher) => voucher._id === clickedVoucher._id
      )
    ) {
      onSetChosenByEmployeeVouchers([
        ...chosenByEmployeeVouchers,
        selectedVoucher,
      ]);
      const subtractedAgainPoints =
        pointsAfterVoucher - clickedVoucher.neededpoints;
      setPointsAfterVoucher(subtractedAgainPoints);
    } else if (
      chosenByEmployeeVouchers.some(
        (voucher) => voucher._id === clickedVoucher._id
      )
    ) {
      const remainingChosenByEmployeeVouchers = chosenByEmployeeVouchers.filter(
        (voucher) => voucher._id !== clickedVoucher._id
      );
      onSetChosenByEmployeeVouchers(remainingChosenByEmployeeVouchers);
      const addedPoints = pointsAfterVoucher + clickedVoucher.neededpoints;
      setPointsAfterVoucher(addedPoints);
    }
  }

  function showVoucherCheck() {
    if (chosenByEmployeeVouchers.length === 0) {
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
        <span>{isThisUserOnApi ? pointsAfterVoucher : "0"}</span> Punkte{" "}
      </ActionInfo>
      <VoucherSection>
        {vouchersOnApi.map((voucher, index) => (
          <>
            <SingleVoucher key={index}>
              <VoucherTitle>{voucher.vouchertype}</VoucherTitle>
              <VoucherValue>
                über {voucher.vouchervalue} {voucher.vouchercurrency}
              </VoucherValue>
              <VoucherPartner>von {voucher.voucherpartner}</VoucherPartner>
              <BonusPointBubble>{voucher.neededpoints} Punkte</BonusPointBubble>
              <ChooseCheckbox
                disabled={
                  pointsAfterVoucher < voucher.neededpoints &&
                  !chosenByEmployeeVouchers.some(
                    (chosenvoucher) => chosenvoucher._id === voucher._id
                  )
                }
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
  bottom: 13rem;
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
