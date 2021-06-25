import styled from "styled-components";

export default function EmployeeVoucherIsAcquired({
  loggedInUser,
  onSetChosenByEmployeeVouchers,
  onSetIsEmployeeVoucherIsAcquired,
  onSetIsEmployeeVoucherChoice,
  onCheckPointsThisEmployeeOnApi,
}) {
  function aquireAnotherVoucher() {
    onCheckPointsThisEmployeeOnApi();
    onSetChosenByEmployeeVouchers([]);
    onSetIsEmployeeVoucherIsAcquired(false);
    onSetIsEmployeeVoucherChoice(true);
  }

  return (
    <>
      <h1>VIELEN DANK, {loggedInUser.name.split(" ")[0].toUpperCase()}!</h1>
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
  border: none;
  background-color: black;
  border-bottom: 0.5rem solid red;
  color: white;
  cursor: pointer;
  font-size: 1.5rem;
  margin: 1rem 4rem;
  padding: 1rem;
`;
