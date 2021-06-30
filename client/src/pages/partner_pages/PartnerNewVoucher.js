import { useState } from "react";
import styled from "styled-components";

export default function PartnerNewVoucher({
  onSetNewPartnerVoucherForConfirmation,
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
  const [createdByPartnerVoucher, setCreatedByPartnerVoucher] =
    useState(emptyVoucher);

  function updateCreatedByPartnerVoucher(event) {
    const fieldName = event.target.name;
    let fieldValue = event.target.value;
    setCreatedByPartnerVoucher({
      ...createdByPartnerVoucher,
      [fieldName]: fieldValue,
    });
  }

  function setRelatedNeededPoints() {
    if (
      createdByPartnerVoucher.vouchervalue <= 0 ||
      isNaN(createdByPartnerVoucher.vouchervalue)
    ) {
      const fieldName = "neededpoints";
      let fieldValue = 0;
      setCreatedByPartnerVoucher({
        ...createdByPartnerVoucher,
        [fieldName]: fieldValue,
      });
    } else if (
      createdByPartnerVoucher.vouchervalue > 0 &&
      createdByPartnerVoucher.vouchervalue <= 25
    ) {
      const fieldName = "neededpoints";
      let fieldValue = 2;
      setCreatedByPartnerVoucher({
        ...createdByPartnerVoucher,
        [fieldName]: fieldValue,
      });
    } else if (
      createdByPartnerVoucher.vouchervalue > 25 &&
      createdByPartnerVoucher.vouchervalue <= 50
    ) {
      const fieldName = "neededpoints";
      let fieldValue = 4;
      setCreatedByPartnerVoucher({
        ...createdByPartnerVoucher,
        [fieldName]: fieldValue,
      });
    } else if (
      createdByPartnerVoucher.vouchervalue > 50 &&
      createdByPartnerVoucher.vouchervalue <= 75
    ) {
      const fieldName = "neededpoints";
      let fieldValue = 6;
      setCreatedByPartnerVoucher({
        ...createdByPartnerVoucher,
        [fieldName]: fieldValue,
      });
    } else if (
      createdByPartnerVoucher.vouchervalue > 75 &&
      createdByPartnerVoucher.vouchervalue <= 100
    ) {
      const fieldName = "neededpoints";
      let fieldValue = 8;
      setCreatedByPartnerVoucher({
        ...createdByPartnerVoucher,
        [fieldName]: fieldValue,
      });
    } else if (createdByPartnerVoucher.vouchervalue > 100) {
      const fieldName = "neededpoints";
      let fieldValue = 10;
      setCreatedByPartnerVoucher({
        ...createdByPartnerVoucher,
        [fieldName]: fieldValue,
      });
    }
  }

  function showVoucherCheck(event) {
    event.preventDefault();
    if (notAValidVoucher()) {
      setIsVoucherErrorMessage(true);
      setTimeout(() => {
        setIsVoucherErrorMessage(false);
      }, 2000);
    } else {
      onSetIsPartnerNewVoucher(false);
      onSetIsPartnerVoucherCheck(true);
      onSetNewPartnerVoucherForConfirmation(createdByPartnerVoucher);
      setCreatedByPartnerVoucher(emptyVoucher);
    }
  }

  function notAValidVoucher() {
    return (
      createdByPartnerVoucher.vouchertype === "" ||
      createdByPartnerVoucher.vouchertype === "notChosen" ||
      createdByPartnerVoucher.voucherpartner === "" ||
      !isNaN(createdByPartnerVoucher.voucherpartner) ||
      isNaN(createdByPartnerVoucher.vouchervalue) ||
      createdByPartnerVoucher.vouchervalue.includes("-") ||
      createdByPartnerVoucher.vouchervalue === 0 ||
      createdByPartnerVoucher.vouchercurrency === "" ||
      createdByPartnerVoucher.vouchercurrency === "notChosen"
    );
  }

  return (
    <>
      <h1>NEUER GUTSCHEIN</h1>
      <ActionInfo>
        Bitte tragen Sie die Eckdaten Ihres Gutscheins in das nachfolgende
        Formular ein.
      </ActionInfo>
      <VoucherForm onSubmit={showVoucherCheck}>
        <VoucherSelect
          name="vouchertype"
          value={createdByPartnerVoucher.vouchertype}
          onChange={updateCreatedByPartnerVoucher}
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
          value={createdByPartnerVoucher.voucherpartner}
          onChange={updateCreatedByPartnerVoucher}
        />
        <VoucherValue>
          <VoucherValueInput
            type="text"
            name="vouchervalue"
            placeholder="Wert in"
            value={createdByPartnerVoucher.vouchervalue}
            onChange={updateCreatedByPartnerVoucher}
            onBlur={setRelatedNeededPoints}
          />
          <VoucherCurrency
            name="vouchercurrency"
            value={createdByPartnerVoucher.currency}
            onChange={updateCreatedByPartnerVoucher}
          >
            <option value="notChosen">--</option>
            <option value="€">€</option>
            <option value="%">%</option>
          </VoucherCurrency>
        </VoucherValue>
        <PointsInfo>
          Zu erwerben für
          <PointsNeeded
            name="neededpoints"
            readOnly
            value={createdByPartnerVoucher.neededpoints}
          />{" "}
          Bonuspunkte
        </PointsInfo>
        {isVoucherErrorMessage && (
          <VoucherError>
            Der Gutschein ist leider nicht komplett oder fehlerhaft. Bitte
            ergänzen Sie ihn um die fehlenden Eingaben.
          </VoucherError>
        )}
        <CheckButton>Gutschein prüfen</CheckButton>
      </VoucherForm>
    </>
  );
}

const ActionInfo = styled.h4`
  padding: 0 2rem;
`;

const VoucherForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 2rem 2rem 0;
`;

const VoucherSelect = styled.select`
  border: none;
  border-bottom: 0.2rem solid black;
  cursor: pointer;
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

const VoucherPartnerInput = styled.input`
  border: none;
  border-bottom: 0.2rem solid black;
  color: black;
  font-size: 1.5rem;
  margin-bottom: 2rem;
  text-align: center;
`;

const VoucherValue = styled.section`
  display: flex;
  justify-content: space-around;
  border: none;
  border-bottom: 0.2rem solid black;
  cursor: pointer;
  margin-bottom: 2rem;
`;

const VoucherValueInput = styled.input`
  border: none;
  color: black;
  font-size: 1.5rem;
  text-align: center;
`;

const VoucherCurrency = styled.select`
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
`;

const PointsInfo = styled.p`
  font-size: 0.75rem;
`;

const PointsNeeded = styled.input`
  border: none;
  text-align: center;
  width: 4rem;
`;

const VoucherError = styled.div`
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
  margin: 1rem 0;
  padding: 1rem;
`;
