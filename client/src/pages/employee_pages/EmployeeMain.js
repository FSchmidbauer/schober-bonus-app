import styled from "styled-components";
import TitelbildVoucher from "../../images/voucher.jpg";

export default function EmployeeMain({
  loggedInUser,
  onSetIsUserIsEmployee,
  onSetIsEmployeeVoucherChoice,
  isThisEmployeeOnApi,
  pointsThisEmployeeOnApi,
  onSetVouchersOnApi,
}) {
  function showEmployeeVoucherChoice() {
    fetch("/vouchers")
      .then((result) => result.json())
      .then((apiVouchers) => onSetVouchersOnApi(apiVouchers))
      .catch((error) => console.error(error));
    onSetIsUserIsEmployee(false);
    onSetIsEmployeeVoucherChoice(true);
  }

  return (
    <>
      <h1>HAUPTMENÜ</h1>
      <WelcomeMessage>
        Hallo {loggedInUser.name.split(" ")[0]}! Du hast aktuell{" "}
        <span>{isThisEmployeeOnApi ? pointsThisEmployeeOnApi : "0"}</span>{" "}
        Bonuspunkte. Was willst Du tun?
      </WelcomeMessage>
      {/* <ActionGrid> */}
      <BonusSection>
        <ActionImage
          src={TitelbildVoucher}
          onClick={showEmployeeVoucherChoice}
        />
        <p>Bonuspunkte einlösen </p>
      </BonusSection>
      {/* <HistorySection>
          <ActionImage />
          <p>Historie ansehen</p>
        </HistorySection>
      </ActionGrid> */}
    </>
  );
}

const WelcomeMessage = styled.h2`
  padding: 0 2rem;

  span {
    color: red;
  }
`;

// const ActionGrid = styled.section`
//    display: grid;
//    grid-template-columns: 1fr 1fr;
//    column-gap: 0.5rem;
//    margin-top: 2rem;
// `;

const BonusSection = styled.section`
  grid-column: 1;
  grid-row: 1;
  cursor: pointer;
  margin-top: 2rem;
  p {
    font-weight: bold;
  }
`;

// const HistorySection = styled.section`
//   grid-column: 2;
//   grid-row: 1;
//   cursor: pointer;
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
