import { useState } from "react";
import styled from "styled-components";

export default function PartnerVoucherCheck({
  onConfirmVoucher,
  voucherToConfirm,
}) {
  function jumpOnLastPage() {
    window.history.go(-1);
  }

  return (
    <>
      <h1>GUTSCHEIN-CHECK</h1>
      <ActionInfo>Sie haben gerade folgenden Gutschein erstellt:</ActionInfo>
      <ProvisorischerGutschein>
        <p>{voucherToConfirm.vouchertype}</p>
        <p>von {voucherToConfirm.voucherpartner}</p>
        <p>
          über {voucherToConfirm.vouchervalue}{" "}
          {voucherToConfirm.vouchercurrency}
        </p>
        <p>für {voucherToConfirm.neededpoints} Bonuspunkte.</p>
      </ProvisorischerGutschein>
      <ButtonSection>
        <CorrectButton onClick={() => jumpOnLastPage()}>Anpassen</CorrectButton>
        <ConfirmButton onClick={() => onConfirmVoucher(voucherToConfirm)}>
          Bestätigen
        </ConfirmButton>
      </ButtonSection>
    </>
  );
}

const ActionInfo = styled.h4`
  padding: 0 2rem;
`;

const ButtonSection = styled.section`
  display: flex;
  justify-content: space-around;
  margin: 0.75rem;
`;

const CorrectButton = styled.button`
  border: none;
  background-color: white;
  color: red;
  padding: 1rem;
  width: 10rem;
  font-size: 1.5rem;
  cursor: pointer;

  :hover {
    background-color: black;
    color: white;
  }
`;

const ConfirmButton = styled.button`
  border: none;
  background-color: red;
  padding: 1rem;
  width: 10rem;
  font-size: 1.5rem;
  color: white;
  cursor: pointer;
`;

const ProvisorischerGutschein = styled.p`
  text-align: center;
`;
