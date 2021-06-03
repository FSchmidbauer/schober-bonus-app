import { useState } from "react";
import styled from "styled-components";
import BonusImage from "./images/bonus-image.png";
import VoucherImage from "./images/voucher-image.png";
import EmployeesImage from "./images/employees-image.png";

export default function BossMain(createdUser) {
  return (
    <>
      <h1>HAUPTMENÜ</h1>
      <h2>Hallo {createdUser.name}! Was willst Du tun?</h2>
      <ActionGrid>
        <BonusSection>
          <ActionImage src={BonusImage} />
          <p>Bonuspunkte vergeben</p>
        </BonusSection>
        <VoucherSection>
          <ActionImage src={VoucherImage} />
          <p>Gutscheine ansehen</p>
        </VoucherSection>
      </ActionGrid>
      <EmployeeSection>
        <ActionImage src={EmployeesImage} />
        <p>Mitarbeiter verwalten</p>
      </EmployeeSection>
    </>
  );
}

const ActionGrid = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 1.5rem 0rem 0rem;
`;

const BonusSection = styled.section`
  grid-column: 1;
  grid-row: 1;
  cursor: pointer;
  p {
    font-weight: bold;
  }
`;

const VoucherSection = styled.section`
  grid-column: 2;
  grid-row: 1;
  cursor: pointer;
  p {
    font-weight: bold;
  }
`;

const EmployeeSection = styled.section`
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
