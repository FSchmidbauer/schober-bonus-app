import { useState } from "react";
import styled from "styled-components";

export default function PartnerNewVoucher({
  createdVoucher,
  onSetCreatedVoucher,
  onSetPartnerCreateNewVoucher,
  onSetPartnerVoucherCheck,
}) {
  function updateVoucher(event) {
    const fieldName = event.target.name;
    let fieldValue = event.target.value;
    onSetCreatedVoucher({ ...createdVoucher, [fieldName]: fieldValue });
  }

  function showVoucherCheck() {
    onSetPartnerCreateNewVoucher(false);
    onSetPartnerVoucherCheck(true);
  }

  return (
    <>
      <h1>GUTSCHEINERSTELLUNG</h1>
      <VoucherForm>
        <select name="vouchertype" onChange={updateVoucher}>
          <option>-- Gutscheinart --</option>
          <option value="restaurant">Restaurant-Gutschein</option>
          <option value="shopping">Shopping-Gutschein</option>
          <option value="tanken">Tank-Gutschein</option>
          <option value="lebensmittel">Lebensmittel-Gutschein</option>
          <option value="erlebnis">Erlebnis-Gutschein</option>
        </select>
        <div>
          <VoucherValue
            type="text"
            name="vouchervalue"
            placeholder="Gutscheinwert"
            onChange={updateVoucher}
          />
          <select name="vouchercurrency" onChange={updateVoucher}>
            <option>-- in --</option>
            <option value="euro">€</option>
            <option value="percent">%</option>
          </select>
          <p>
            Zu erwerben für
            <select name="neededpoints" onChange={updateVoucher}>
              <option>--</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
            Bonuspunkte
          </p>
        </div>
        <button onClick={showVoucherCheck}>Gutschein prüfen</button>
      </VoucherForm>
    </>
  );
}

const VoucherForm = styled.form`
  border: 0.2rem solid black;
  border-radius: 10vw;

  select {
    border: 0.3rem solid black;
    border-radius: 1rem;
    font-size: 1.5rem;
    padding: 1rem;
    margin: 1rem;
    cursor: pointer;
  }

  button {
    background-color: red;
    margin: 3rem;
    padding: 1rem;
    font-size: 1.5rem;
    color: white;
    cursor: pointer;
  }
`;

const VoucherValue = styled.input`
  border: 0.3rem solid black;
  border-radius: 1rem;
  font-size: 1.5rem;
  padding: 0.75rem;
  margin: 1rem;
  text-align: center;
  color: black;
`;
