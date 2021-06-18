import styled from "styled-components";

export default function PartnerVoucherIsPublished({
  onSetIsPartnerNewVoucher,
  onSetIsPartnerVoucherIsPublished,
}) {
  function createAnotherVoucher() {
    onSetIsPartnerVoucherIsPublished(false);
    onSetIsPartnerNewVoucher(true);
  }

  return (
    <>
      <h1>VIELEN DANK!</h1>
      <ActionInfo>Ihr Gutschein wurde erfolgreich generiert.</ActionInfo>
      <NewVoucherButton onClick={createAnotherVoucher}>
        Weiteren Gutschein erstellen
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
