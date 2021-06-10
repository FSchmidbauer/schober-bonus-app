import styled from "styled-components";

export default function EmployeeMain({
  createdUser,
  onSetUserIsEmployee,
  onSetEmployeeVoucherChoice,
}) {
  function showEmployeeVoucherChoice() {
    onSetUserIsEmployee(false);
    onSetEmployeeVoucherChoice(true);
  }

  return (
    <>
      <h1>HAUPTMENÜ</h1>
      <WelcomeMessage>
        Hallo {createdUser.name.split(" ")[0]}! Was willst Du tun?
      </WelcomeMessage>
      <ActionGrid>
        <BonusSection>
          <ActionImage onClick={showEmployeeVoucherChoice} />
          <p>Bonuspunkte einlösen </p>
        </BonusSection>
        <HistorySection>
          <ActionImage />
          <p>Historie ansehen</p>
        </HistorySection>
      </ActionGrid>
    </>
  );
}

const WelcomeMessage = styled.h2`
  padding: 0 2rem;
`;

const ActionGrid = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 1.5rem 0rem 0rem;
`;

const BonusSection = styled.section`
  grid-column: 1;
  grid-row: 1;
  cursor: pointer;
  p {
    font-weight: bold;
  }
`;

const HistorySection = styled.section`
  grid-column: 2;
  grid-row: 1;
  cursor: pointer;
  p {
    font-weight: bold;
  }
`;

const ActionImage = styled.img`
  padding: 0.3rem;
  width: 10rem;
  height: 8rem;
  border: 0.2rem solid black;
  border-radius: 3rem;
  cursor: pointer;
`;
