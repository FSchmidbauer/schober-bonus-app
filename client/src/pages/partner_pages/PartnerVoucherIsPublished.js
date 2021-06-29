import styled from "styled-components";

export default function PartnerVoucherIsPublished({
  loggedInUser,
  onSetIsPartnerNewVoucher,
  onSetIsPartnerVoucherIsPublished,
}) {
  function createAnotherVoucher() {
    onSetIsPartnerVoucherIsPublished(false);
    onSetIsPartnerNewVoucher(true);
  }

  return (
    <>
      <h1>VIELEN DANK, {loggedInUser.name.toUpperCase()}!</h1>
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
  border: none;
  background-color: black;
  border-bottom: 0.5rem solid red;
  color: white;
  cursor: pointer;
  font-size: 1.5rem;
  margin: 1rem 1rem;
  padding: 1rem;
`;
