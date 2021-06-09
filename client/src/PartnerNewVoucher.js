import { useState } from "react";
import styled from "styled-components";

export default function PartnerNewVoucher({
  createdVoucher,
  onSetCreatedVoucher,
  onSetVoucherToConfirm,
  onSetPartnerNewVoucher,
  onSetPartnerVoucherCheck,
}) {
  function updateVoucher(event) {
    const fieldName = event.target.name;
    let fieldValue = event.target.value;
    onSetCreatedVoucher({ ...createdVoucher, [fieldName]: fieldValue });
  }

  function showVoucherCheck() {
    onSetPartnerNewVoucher(false);
    onSetPartnerVoucherCheck(true);
    onSetVoucherToConfirm(createdVoucher);
  }

  return (
    <>
      <h1>NEUER GUTSCHEIN</h1>
      <ActionInfo>
        Bitte tragen Sie die Eckdaten Ihres Gutscheins in das nachfolgende
        Formular ein.
      </ActionInfo>
      <VoucherForm>
        <VoucherSelect name="vouchertype" onChange={updateVoucher}>
          <option>-- Gutscheinart --</option>
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
          onChange={updateVoucher}
        />
        <VoucherValue>
          <VoucherValueInput
            type="text"
            name="vouchervalue"
            placeholder="Wert in"
            onChange={updateVoucher}
          />
          <VoucherCurrency name="vouchercurrency" onChange={updateVoucher}>
            <option>--</option>
            <option value="€">€</option>
            <option value="%">%</option>
          </VoucherCurrency>
        </VoucherValue>
        <p>
          Zu erwerben für
          <PointsSelect name="neededpoints" onChange={updateVoucher}>
            <option>--</option>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
            <option value="25">25</option>
          </PointsSelect>
          Bonuspunkte
        </p>
        <CheckButton onClick={showVoucherCheck}>Gutschein prüfen</CheckButton>
      </VoucherForm>
    </>
  );
}

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

const PointsSelect = styled.select`
  border: none;
  font-size: 1.5rem;
  padding: 0 0.5rem;
  margin-bottom: 1rem;
  cursor: pointer;
`;

const CheckButton = styled.button`
  background-color: red;
  padding: 1rem;
  font-size: 1.5rem;
  color: white;
  cursor: pointer;
`;
