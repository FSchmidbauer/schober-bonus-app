import styled from "styled-components";

export default function EmployeeVoucherCheck({
  chosenVouchers,
  onAcquireAndDeleteForOthersVoucher,
}) {
  function jumpOnLastPage() {
    window.history.go(-1);
  }

  return (
    <>
      <h1>AUSWAHL-CHECK</h1>
      <ActionInfo>Du hast folgende Gutscheine für Dich ausgewählt:</ActionInfo>
      <VoucherToConfirmSection>
        {chosenVouchers.map((voucher) => {
          return (
            <VoucherToConfirm>
              <VoucherTitle>{voucher.vouchertype}</VoucherTitle>
              <VoucherValue>
                über {voucher.vouchervalue} {voucher.vouchercurrency}
              </VoucherValue>
              <VoucherPartner>von {voucher.voucherpartner}</VoucherPartner>
              <BonusPointBubble>{voucher.neededpoints} Punkte</BonusPointBubble>
            </VoucherToConfirm>
          );
        })}
      </VoucherToConfirmSection>
      <ButtonSection>
        <CorrectButton onClick={() => jumpOnLastPage()}>Anpassen</CorrectButton>
        <ConfirmButton onClick={() => onAcquireAndDeleteForOthersVoucher()}>
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
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  place-items: center;
`;

const VoucherToConfirm = styled.section`
  position: relative;
  margin: 1.5rem 3rem;
  border: 0.2rem solid red;
  border-radius: 3rem;
`;

const VoucherTitle = styled.p`
  padding-top: 1rem;
  font-weight: bold;
  font-size: 1.5rem;
`;

const VoucherValue = styled.p`
  margin: 0 8rem;
  padding: 1rem;
`;

const VoucherPartner = styled.p`
  font-weight: bold;
  font-size: 1.2rem;
`;

const BonusPointBubble = styled.section`
  position: absolute;
  left: 20rem;
  bottom: 11rem;
  background-color: red;
  border-radius: 1rem;
  color: white;
  padding: 1rem;
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