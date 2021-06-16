import styled from "styled-components";
import BonusImage from "../images/bonus-image.png";
import VoucherImage from "../images/voucher-image.png";
import EmployeesImage from "../images/employees-image.png";

export default function BossMain({
  createdUser,
  onSetUserIsBoss,
  onSetBossNewPoints,
  onSetBossVoucherOverview,
}) {
  function showBossNewPoints() {
    onSetUserIsBoss(false);
    onSetBossNewPoints(true);
  }

  function showBossVoucherOverview() {
    onSetUserIsBoss(false);
    onSetBossVoucherOverview(true);
  }

  return (
    <>
      <h1>HAUPTMENÜ</h1>
      <WelcomeMessage>
        Hallo {createdUser.name.split(" ")[0]}! Was willst Du tun?
      </WelcomeMessage>
      <ActionGrid>
        <BonusSection>
          <ActionImage src={BonusImage} onClick={showBossNewPoints} />
          <p>Bonuspunkte vergeben</p>
        </BonusSection>
        <VoucherSection>
          <ActionImage src={VoucherImage} onClick={showBossVoucherOverview} />
          <p>Gutscheine ansehen</p>
        </VoucherSection>
      </ActionGrid>
      <EmployeeSection>
        <ActionImage src={EmployeesImage} />
        <p>Mitarbeiter verwalten</p>
      </EmployeeSection>
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

const VoucherSection = styled.section`
  grid-column: 2;
  grid-row: 1;
  cursor: pointer;
  p {
    font-weight: bold;
  }
`;

const EmployeeSection = styled.section`
  margin-top: 1.5rem;
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
