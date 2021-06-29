import { useState } from "react";
import styled from "styled-components";
import Voucher from "../../images/voucher.jpg";

export default function EmployeeVoucherChoice({
  loggedInUser,
  vouchersOnApi,
  onSetChosenByEmployeeVouchers,
  chosenByEmployeeVouchers,
  onSetIsEmployeeVoucherChoice,
  onSetIsEmployeeVoucherCheck,
  isThisEmployeeOnApi,
  pointsThisEmployeeOnApi,
}) {
  const [isChoiceErrorMessage, setIsChoiceErrorMessage] = useState(false);
  const [pointsAfterVoucher, setPointsAfterVoucher] = useState(
    pointsThisEmployeeOnApi
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
      setTimeout(() => {
        setIsChoiceErrorMessage(false);
      }, 2000);
    } else {
      onSetIsEmployeeVoucherChoice(false);
      onSetIsEmployeeVoucherCheck(true);
    }
  }

  return (
    <>
      <h1>GUTSCHEIN-AUSWAHL</h1>
      <ActionInfo>
        Wenn Du genügend Bonuspunkte hast, kannst Du Dir jetzt per Klick einen
        oder mehrere dieser Gutscheine für Dich aussuchen.
      </ActionInfo>
      <PointsInfo>
        {loggedInUser.name.split(" ")[0]}:{" "}
        <span>{isThisEmployeeOnApi ? pointsAfterVoucher : "0"}</span>{" "}
      </PointsInfo>
      <VoucherSection>
        {vouchersOnApi.map((voucher, index) => (
          <>
            <SingleVoucher key={index}>
              <VoucherImage src={Voucher} />
              <VoucherText>
                {voucher.vouchertype} <br />
                <span>
                  von {voucher.voucherpartner}
                  <br />
                  <span>
                    über {voucher.vouchervalue} {voucher.vouchercurrency}
                  </span>
                </span>
              </VoucherText>
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
      <PointsInfo>
        {loggedInUser.name.split(" ")[0]}:{" "}
        <span>{isThisEmployeeOnApi ? pointsAfterVoucher : "0"}</span>{" "}
      </PointsInfo>
      {isChoiceErrorMessage && (
        <ChoiceError>
          Du musst zuerst eine Auswahl treffen, bevor Du auf diese Seite kannst.
        </ChoiceError>
      )}
      <CheckButton onClick={showVoucherCheck}>Auswahl prüfen</CheckButton>
    </>
  );
}

const ActionInfo = styled.h4`
  padding: 0 2rem;
`;

const PointsInfo = styled.p`
  border: 0.2rem solid black;
  border-radius: 2rem;
  color: black;
  font-size: 1.5rem;
  font-weight: bold;
  margin: 4rem 3rem 4rem;
  padding: 0.5rem 2rem;

  span {
    color: red;
  }
`;

const VoucherSection = styled.section`
  display: flex;
  flex-flow: column wrap;
`;

const SingleVoucher = styled.section`
  background: lightgrey;
  border-radius: 1rem;
  margin: 1rem 2rem;
  padding: 1rem 1rem 0.5rem;
  position: relative;

  :nth-child(even) {
    background: white;
    border: 0.2rem solid lightgrey;
  }
`;

const VoucherImage = styled.img`
  border-radius: 1rem;
  max-width: 14rem;
`;

const VoucherText = styled.p`
  font-size: 1rem;
  font-weight: bold;
  text-align: left;

  span {
    font-weight: normal;

    span {
      color: red;
      font-weight: bold;
    }
  }
`;

const BonusPointBubble = styled.section`
  background: lightgrey;
  border-radius: 0rem 1rem 1rem 0rem;
  color: red;
  font-weight: bold;
  padding: 0.5rem;
  position: absolute;
  bottom: 13.5rem;

  :nth-child(even) {
    background: white;
  }
`;

const ChooseCheckbox = styled.input`
  border: 0.2rem solid black;
  border-radius: 1rem;
  height: 2rem;
  width: 2rem;
  position: absolute;
  left: 13rem;
  bottom: 1rem;
`;

const ChoiceError = styled.div`
  background-color: red;
  color: white;
  margin: 1rem;
  padding: 0.5rem;
`;

const CheckButton = styled.button`
  border: none;
  background-color: black;
  border-bottom: 0.5rem solid red;
  color: white;
  cursor: pointer;
  font-size: 1.5rem;
  padding: 1rem;
`;
