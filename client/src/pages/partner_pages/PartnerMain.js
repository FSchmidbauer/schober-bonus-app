import styled from "styled-components";
import TitelbildVoucher from "../../images/voucher.jpg";

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
        <ActionImage src={TitelbildVoucher} />
        <p>Gutschein anlegen </p>
      </NewVoucherSection>
    </>
  );
}

const WelcomeMessage = styled.h2`
  padding: 0 2rem;
`;

const NewVoucherSection = styled.section`
  cursor: pointer;
  margin-top: 2rem;
  p {
    font-weight: bold;
  }
`;

const ActionImage = styled.img`
  border: 0.2rem solid black;
  border-radius: 2rem;
  cursor: pointer;
  padding: 0.3rem;
  max-height: 6rem;
  max-width: 10rem;
`;
