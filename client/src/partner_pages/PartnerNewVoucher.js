import { useState } from "react";
import styled from "styled-components";

export default function PartnerNewVoucher({
  onSetVoucherToConfirm,
  onSetIsPartnerNewVoucher,
  onSetIsPartnerVoucherCheck,
}) {
  const emptyVoucher = {
    vouchertype: "",
    voucherpartner: "",
    vouchervalue: "",
    vouchercurrency: "",
    neededpoints: 0,
  };

  const [isVoucherErrorMessage, setIsVoucherErrorMessage] = useState(false);
  const [createdVoucher, setCreatedVoucher] = useState(emptyVoucher);

  function updateVoucher(event) {
    const fieldName = event.target.name;
    let fieldValue = event.target.value;
    setCreatedVoucher({ ...createdVoucher, [fieldName]: fieldValue });
  }

  function showVoucherCheck(event) {
    if (
      // createdVoucher.length !== 4 ||
      createdVoucher.vouchertype === "notChosen" ||
      createdVoucher.vouchervalue === "0" ||
      createdVoucher.vouchervalue.includes("-") ||
      createdVoucher.vouchercurrency === "notChosen"
    ) {
      event.preventDefault();
      setIsVoucherErrorMessage(true);
    } else {
      onSetIsPartnerNewVoucher(false);
      onSetIsPartnerVoucherCheck(true);
      onSetVoucherToConfirm(createdVoucher);
      setCreatedVoucher(emptyVoucher);
    }
  }

  function changePointsNeeded() {
    if (createdVoucher.vouchervalue <= 0) {
      setCreatedVoucher({ ...createdVoucher, [neededpoints]: 0 });
    } else if (
      createdVoucher.vouchervalue > 0 &&
      createdVoucher.vouchervalue <= 25
    ) {
      setCreatedVoucher({ ...createdVoucher, [neededpoints]: 2 });
    }
    // } else if (
    //   createdVoucher.vouchervalue > 25 &&
    //   createdVoucher.vouchervalue <= 50
    // ) {
    //   setRelatedPoints(4);
    // } else if (
    //   createdVoucher.vouchervalue > 50 &&
    //   createdVoucher.vouchervalue <= 75
    // ) {
    //   setRelatedPoints(6);
    // } else if (
    //   createdVoucher.vouchervalue > 75 &&
    //   createdVoucher.vouchervalue <= 100
    // ) {
    //   setRelatedPoints(8);
    // } else setRelatedPoints(10);
  }

  return (
    <>
      {isVoucherErrorMessage && (
        <VoucherError>
          Der Gutschein ist leider nicht komplett oder fehlerhaft.<br></br>Bitte
          ergänzen Sie ihn um die fehlenden Eingaben.
        </VoucherError>
      )}
      <h1>NEUER GUTSCHEIN</h1>
      <ActionInfo>
        Bitte tragen Sie die Eckdaten Ihres Gutscheins in das nachfolgende
        Formular ein.
      </ActionInfo>
      <VoucherForm>
        <VoucherSelect
          name="vouchertype"
          value={createdVoucher.vouchertype}
          onChange={updateVoucher}
        >
          <option value="notChosen">-- Gutscheinart --</option>
          <option value="Restaurant-Gutschein">Restaurant-Gutschein</option>
          <option value="Shopping-Gutschein">Shopping-Gutschein</option>
          <option value="Tank-Gutschein">Tank-Gutschein</option>
          <option value="Lebensmittel-Gutschein">Lebensmittel-Gutschein</option>
          <option value="Erlebnis-Gutschein">Erlebnis-Gutschein</option>
        </VoucherSelect>
        <VoucherPartnerInput
          type="text"
          name="voucherpartner"
          placeholder="Partner-Unternehmen"
          value={createdVoucher.voucherpartner}
          onChange={updateVoucher}
        />
        <VoucherValue>
          <VoucherValueInput
            type="text"
            name="vouchervalue"
            placeholder="Wert in"
            value={createdVoucher.vouchervalue}
            onChange={updateVoucher}
            onBlur={changePointsNeeded}
          />
          <VoucherCurrency
            name="vouchercurrency"
            value={createdVoucher.currency}
            onChange={updateVoucher}
          >
            <option value="notChosen">--</option>
            <option value="€">€</option>
            <option value="%">%</option>
          </VoucherCurrency>
        </VoucherValue>
        <p>
          Zu erwerben für
          <PointsNeeded
            name="neededpoints"
            value={createdVoucher.neededpoints}
            onChange={updateVoucher}
          />{" "}
          Bonuspunkte
        </p>
        <CheckButton onClick={showVoucherCheck}>Gutschein prüfen</CheckButton>
      </VoucherForm>
    </>
  );
}

const VoucherError = styled.div`
  background-color: red;
  color: white;
  padding: 0.5rem;
`;

const ActionInfo = styled.h4`
  padding: 0 2rem;
`;

const VoucherForm = styled.form`
  margin: 1rem 3rem 0;
`;

const VoucherSelect = styled.select`
  border: none;
  border-bottom: 0.2rem solid black;
  font-size: 1.5rem;
  margin-bottom: 2rem;
  cursor: pointer;
`;

const VoucherPartnerInput = styled.input`
  border: none;
  border-bottom: 0.2rem solid black;
  font-size: 1.5rem;
  margin-bottom: 2rem;
  text-align: center;
  color: black;
`;

const VoucherValue = styled.section`
  display: flex;
  justify-content: center;
  border: none;
  border-bottom: 0.2rem solid black;
  margin-bottom: 2rem;
  cursor: pointer;
`;

const VoucherValueInput = styled.input`
  border: none;
  font-size: 1.5rem;
  text-align: center;
  color: black;
`;

const VoucherCurrency = styled.select`
  border: none;
  font-size: 2rem;
  cursor: pointer;
`;

const PointsNeeded = styled.input`
  border: none;
  font-size: 1.5rem;
  text-align: center;
  margin: 0 1rem;
  width: 2rem;
`;

const CheckButton = styled.button`
  background-color: red;
  padding: 1rem;
  font-size: 1.5rem;
  color: white;
  cursor: pointer;
`;
