import styled from "styled-components";
import Voucher from "../../images/voucher.jpg";

export default function PartnerVoucherCheck({
  newPartnerVoucherForConfirmation,
  onSetIsPartnerVoucherCheck,
  onSetIsPartnerVoucherIsPublished,
  onSetIsPartnerNewVoucher,
}) {
  function jumpOnLastPage() {
    onSetIsPartnerVoucherCheck(false);
    onSetIsPartnerNewVoucher(true);
  }

  function confirmVoucher(voucherToBeConfirmed) {
    fetch("/vouchers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(voucherToBeConfirmed),
    })
      .then((result) => result.json())
      .catch((error) => console.error(error));
    onSetIsPartnerVoucherCheck(false);
    onSetIsPartnerVoucherIsPublished(true);
  }

  return (
    <>
      <h1>GUTSCHEIN-CHECK</h1>
      <ActionInfo>Sie haben gerade folgenden Gutschein erstellt:</ActionInfo>
      <VoucherToConfirm>
        <VoucherImage src={Voucher} />
        <VoucherText>
          {newPartnerVoucherForConfirmation.vouchertype} <br />
          <span>
            von {newPartnerVoucherForConfirmation.voucherpartner}
            <br />
            <span>
              über {newPartnerVoucherForConfirmation.vouchervalue}{" "}
              {newPartnerVoucherForConfirmation.vouchercurrency}
            </span>
          </span>
        </VoucherText>
        <BonusPointBubble>
          {newPartnerVoucherForConfirmation.neededpoints} Punkte
        </BonusPointBubble>
      </VoucherToConfirm>
      <ButtonSection>
        <CorrectButton onClick={() => jumpOnLastPage()}>Anpassen</CorrectButton>
        <ConfirmButton
          onClick={() => confirmVoucher(newPartnerVoucherForConfirmation)}
        >
          Bestätigen
        </ConfirmButton>
      </ButtonSection>
    </>
  );
}

const ActionInfo = styled.h4`
  padding: 0 2rem;
`;

const VoucherToConfirm = styled.section`
  background: lightgrey;
  border-radius: 1rem;
  margin: 1rem 2rem;
  padding: 1rem;
  position: relative;

  :nth-child(even) {
    background: white;
    border: 0.2rem solid lightgrey;
  }
`;

const VoucherImage = styled.img`
  border-radius: 1rem;
  max-width: 14rem;
`;

const VoucherText = styled.p`
  font-size: 1rem;
  font-weight: bold;
  text-align: center;

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
  bottom: 13.5rem;

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
