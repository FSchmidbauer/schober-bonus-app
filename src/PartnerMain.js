import { useState } from "react";
import styled from "styled-components";

export default function PartnerMain(createdUser) {
  return (
    <>
      <h1>HAUPTMENÜ</h1>
      <h2>Hallo {createdUser.name.split(" ")[0]}! Was willst Du tun?</h2>
      <NewVoucherSection>
        <ActionImage />
        <p>Gutschein anlegen </p>
      </NewVoucherSection>
    </>
  );
}

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
  border-radius: 10vw;
  cursor: pointer;
`;
