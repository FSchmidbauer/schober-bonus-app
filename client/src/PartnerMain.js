import { useState } from "react";
import styled from "styled-components";

export default function PartnerMain({
  createdUser,
  onSetUserIsPartner,
  onSetPartnerCreateNewVoucher,
}) {
  function openVoucherCreator() {
    onSetUserIsPartner(false);
    onSetPartnerCreateNewVoucher(true);
  }

  return (
    <>
      <h1>HAUPTMENÜ</h1>
      <WelcomeMessage>
        Guten Tag {createdUser.name}! Was wollen Sie tun?
      </WelcomeMessage>
      <NewVoucherSection onClick={openVoucherCreator}>
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
  margin-top: 1.5rem;
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
