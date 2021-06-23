import styled from "styled-components";

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
    fetch("http://localhost:4000/vouchers", {
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
      <ProvisorischerGutschein>
        <p>{newPartnerVoucherForConfirmation.vouchertype}</p>
        <p>von {newPartnerVoucherForConfirmation.voucherpartner}</p>
        <p>
          über {newPartnerVoucherForConfirmation.vouchervalue}{" "}
          {newPartnerVoucherForConfirmation.vouchercurrency}
        </p>
        <p>für {newPartnerVoucherForConfirmation.neededpoints} Bonuspunkte.</p>
      </ProvisorischerGutschein>
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
