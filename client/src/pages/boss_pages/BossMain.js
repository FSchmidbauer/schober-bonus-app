import styled from "styled-components";
import BonusImage from "../../images/bonus-image.png";
import VoucherImage from "../../images/voucher-image.png";
// import EmployeesImage from "../../images/employees-image.png";

export default function BossMain({
  loggedInUser,
  onSetIsUserIsBoss,
  onSetIsBossNewPoints,
  onSetIsBossVoucherOverview,
  onSetVouchersOnApi,
}) {
  function showBossNewPoints() {
    onSetIsUserIsBoss(false);
    onSetIsBossNewPoints(true);
  }

  function showBossVoucherOverview() {
    fetch("/vouchers")
      .then((result) => result.json())
      .then((apiVouchers) => onSetVouchersOnApi(apiVouchers))
      .catch((error) => console.error(error));
    onSetIsUserIsBoss(false);
    onSetIsBossVoucherOverview(true);
  }

  return (
    <>
      <h1>HAUPTMENÜ</h1>
      <WelcomeMessage>
        Hallo {loggedInUser.name.split(" ")[0]}! Was willst Du tun?
      </WelcomeMessage>
      <ActionGrid>
        <BonusSection>
          <ActionImage src={BonusImage} onClick={showBossNewPoints} />
          <p>
            Bonuspunkte <br />
            vergeben
          </p>
        </BonusSection>
        <VoucherSection>
          <ActionImage src={VoucherImage} onClick={showBossVoucherOverview} />
          <p>
            Gutscheine <br />
            ansehen
          </p>
        </VoucherSection>
      </ActionGrid>
      {/* <EmployeeSection>
        <ActionImage src={EmployeesImage} />
        <p>Mitarbeiter verwalten</p>
      </EmployeeSection> */}
    </>
  );
}

const WelcomeMessage = styled.h2`
  padding: 0 2rem;
`;

const ActionGrid = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 0.5rem;
  margin-top: 2rem;
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

// const EmployeeSection = styled.section`
//   cursor: pointer;
//   margin-top: 1.5rem;
//   p {
//     font-weight: bold;
//   }
// `;

const ActionImage = styled.img`
  border: 0.2rem solid black;
  border-radius: 2rem;
  cursor: pointer;
  padding: 0.3rem;
  max-height: 6rem;
  max-width: 10rem;
`;
