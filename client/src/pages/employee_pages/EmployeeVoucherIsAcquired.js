import { useEffect } from "react";
import styled from "styled-components";

export default function EmployeeVoucherIsAcquired({
  onSetChosenByEmployeeVouchers,
  onSetIsEmployeeVoucherIsAcquired,
  onSetIsEmployeeVoucherChoice,
}) {
  function aquireAnotherVoucher() {
    onSetChosenByEmployeeVouchers([]);
    onSetIsEmployeeVoucherIsAcquired(false);
    onSetIsEmployeeVoucherChoice(true);
  }

  return (
    <>
      <h1>VIELEN DANK!</h1>
      <ActionInfo>
        Dein Gutschein-Erwerb war erfolgreich. Du kannst Dir die ausgedruckten
        Dokumente morgen im Chef-Büro abholen.
      </ActionInfo>
      <NewVoucherButton onClick={aquireAnotherVoucher}>
        Weitere Gutscheine erwerben
      </NewVoucherButton>
    </>
  );
}

const ActionInfo = styled.h4`
  padding: 0 2rem;
`;

const NewVoucherButton = styled.button`
  background-color: red;
  margin: 3rem;
  padding: 1rem;
  font-size: 1.5rem;
  color: white;
  cursor: pointer;
`;
