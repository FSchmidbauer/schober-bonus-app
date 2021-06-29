import styled from "styled-components";
import Voucher from "../../images/voucher.jpg";

export default function EmployeeVoucherCheck({
  onSetChosenByEmployeeVouchers,
  chosenByEmployeeVouchers,
  onSetIsEmployeeVoucherChoice,
  onSetIsEmployeeVoucherCheck,
  onSetIsEmployeeVoucherIsAcquired,
  onSetVouchersOnApi,
  vouchersOnApi,
  loggedInUser,
  onSetEmployeesWithPointsOnApi,
  employeesWithPointsOnApi,
}) {
  function jumpOnLastPage() {
    onSetChosenByEmployeeVouchers([]);
    onSetIsEmployeeVoucherCheck(false);
    onSetIsEmployeeVoucherChoice(true);
  }

  function acquireAndDeleteForOthersVoucher() {
    chosenByEmployeeVouchers.map((voucherToBeDeleted) => {
      return fetch("/vouchers/" + voucherToBeDeleted._id, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((result) => result.json())
        .then((response) => {
          if (response.data && response.data._id) {
            const vouchersToKeep = vouchersOnApi.filter(
              (voucher) => voucher._id !== response.data._id
            );
            onSetVouchersOnApi(vouchersToKeep);
          } else {
            console.log("Voucher could not be deleted.");
          }
        });
    });
    reducePointsOfEmployeeWithPointsOnApi(
      loggedInUser.name.split(" ")[0].toLowerCase()
    );
    onSetIsEmployeeVoucherCheck(false);
    onSetIsEmployeeVoucherIsAcquired(true);
  }

  function reducePointsOfEmployeeWithPointsOnApi(empToGetReducedPoints) {
    const noChangeEmps = employeesWithPointsOnApi.filter(
      (employee) => employee.name !== empToGetReducedPoints
    );
    const empToChangeOnApi = Object.keys(employeesWithPointsOnApi).find(
      (employee) =>
        employeesWithPointsOnApi[employee].name === empToGetReducedPoints
    );

    const IdOfEmpToChangeOnApi = Object.values(
      employeesWithPointsOnApi[empToChangeOnApi]
    )[0];

    const pointsOfSelectedVouchers = chosenByEmployeeVouchers.map(
      (voucher) => voucher.neededpoints
    );

    fetch("/emppoints/" + IdOfEmpToChangeOnApi, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ pointsOfSelectedVouchers }),
    })
      .then((result) => result.json())
      .then((updatedEmpData) =>
        onSetEmployeesWithPointsOnApi([...noChangeEmps, updatedEmpData])
      )
      .catch((error) => console.error(error));
  }

  return (
    <>
      <h1>AUSWAHL-CHECK</h1>
      <ActionInfo>
        Du hast folgende Gutscheine für Dich vorausgewählt:
      </ActionInfo>
      <VoucherToConfirmSection>
        {chosenByEmployeeVouchers.map((voucher, index) => {
          return (
            <VoucherToConfirm key={index}>
              <VoucherImage src={Voucher} />
              <VoucherText>
                {voucher.vouchertype} <br />
                <span>
                  von {voucher.voucherpartner}
                  <br />
                  <span>
                    über {voucher.vouchervalue} {voucher.vouchercurrency}
                  </span>
                </span>
              </VoucherText>
              <BonusPointBubble>{voucher.neededpoints} Punkte</BonusPointBubble>
            </VoucherToConfirm>
          );
        })}
      </VoucherToConfirmSection>
      <ButtonSection>
        <CorrectButton onClick={() => jumpOnLastPage()}>Anpassen</CorrectButton>
        <ConfirmButton onClick={() => acquireAndDeleteForOthersVoucher()}>
          Bestätigen
        </ConfirmButton>
      </ButtonSection>
    </>
  );
}

const ActionInfo = styled.h4`
  padding: 0 2rem;
`;

const VoucherToConfirmSection = styled.section`
  display: flex;
  flex-flow: column wrap;
`;

const VoucherToConfirm = styled.section`
  background: lightgrey;
  border-radius: 1rem;
  margin: 1rem;
  padding: 1rem 1rem 0.5rem;
  position: relative;

  :nth-child(even) {
    background: white;
    border: 0.2rem solid lightgrey;
  }
`;

const VoucherImage = styled.img`
  border-radius: 1rem;
  max-width: 16rem;
`;

const VoucherText = styled.p`
  font-size: 1rem;
  font-weight: bold;
  text-align: left;

  span {
    font-weight: normal;

    span {
      color: red;
      font-weight: bold;
    }
  }
`;

const BonusPointBubble = styled.section`
  background: lightgrey;
  border-radius: 0rem 1rem 1rem 0rem;
  color: red;
  font-weight: bold;
  padding: 0.5rem;
  position: absolute;
  bottom: 14.5rem;

  :nth-child(even) {
    background: white;
  }
`;

const ButtonSection = styled.section`
  display: flex;
  justify-content: space-around;
`;

const CorrectButton = styled.button`
  border: none;
  background-color: white;
  color: red;
  cursor: pointer;
  font-size: 1.5rem;
  padding: 1rem;

  :hover {
    background-color: red;
    color: white;
  }
`;

const ConfirmButton = styled.button`
  border: none;
  background-color: black;
  border-bottom: 0.5rem solid red;
  color: white;
  cursor: pointer;
  font-size: 1.5rem;
  padding: 1rem;
`;
