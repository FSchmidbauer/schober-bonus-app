import styled from "styled-components";

export default function PartnerMain({
  loggedInUser,
  onSetIsUserIsPartner,
  onSetIsPartnerNewVoucher,
}) {
  function showPartnerNewVoucher() {
    onSetIsUserIsPartner(false);
    onSetIsPartnerNewVoucher(true);
  }

  return (
    <>
      <h1>HAUPTMENÜ</h1>
      <WelcomeMessage>
        Guten Tag {loggedInUser.name}! Was wollen Sie tun?
      </WelcomeMessage>
      <NewVoucherSection onClick={showPartnerNewVoucher}>
        <ActionImage />
        <p>Gutschein anlegen </p>
      </NewVoucherSection>
    </>
  );
}

const WelcomeMessage = styled.h2`
  padding: 0 2rem;
`;

const NewVoucherSection = styled.section`
  margin-top: 4rem;
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
