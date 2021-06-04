import { useState } from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   NavLink,
// } from "react-router-dom";
import styled from "styled-components";
import SchoberLogo from "./images/logo-autohaus-schober.png";
import LoginForm, { showBossMenu } from "./LoginForm.js";
import BossMain from "./BossMain.js";
import EmployeeMain from "./EmployeeMain.js";
import PartnerMain from "./PartnerMain.js";

export default function App() {
  const [createdUser, setCreatedUser] = useState(null);
  const [noUser, setNoUser] = useState(true);
  const [userIsBoss, setUserIsBoss] = useState(false);
  const [userIsEmployee, setUserIsEmployee] = useState(false);
  const [userIsPartner, setUserIsPartner] = useState(false);

  return (
    <>
      <header>
        <HeaderImage src={SchoberLogo} />
        <HeaderHeadline>BONUS-APP</HeaderHeadline>
      </header>
      <Main>
        {noUser && (
          <LoginForm
            onSetCreatedUser={setCreatedUser}
            createdUser={createdUser}
            onSetNoUser={setNoUser}
            onSetUserIsBoss={setUserIsBoss}
            onSetUserIsEmployee={setUserIsEmployee}
            onSetUserIsPartner={setUserIsPartner}
          />
        )}
        {userIsBoss && <BossMain createdUser={createdUser} />}
        {userIsEmployee && <EmployeeMain createdUser={createdUser} />}
        {userIsPartner && <PartnerMain createdUser={createdUser} />}
      </Main>
      <Footernav>
        {!noUser && <FooternavButton>Hauptmenü</FooternavButton>}
        {!noUser && <FooternavButton>Logout</FooternavButton>}
        {noUser && <FooternavText>© by Florian Schmidbauer</FooternavText>}
      </Footernav>
    </>
  );
}

const HeaderImage = styled.img`
  width: 10rem;
  padding: 0.5rem 0rem 0rem;
  cursor: pointer;
`;

const HeaderHeadline = styled.section`
  background-color: black;
  color: white;
  margin: 0.5rem 0rem 1rem;
  padding: 1rem;
  font-size: 1.5rem;
`;

const Main = styled.main`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  text-align: center;
  max-width: 30rem;
  margin: 0 auto;
  padding-bottom: 4rem;
`;

const Footernav = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: black;
`;

const FooternavButton = styled.button`
  background-color: white;
  padding: 0.75rem 1rem;
  margin: 0.5rem 0.5rem;
  font-size: 1rem;
  cursor: pointer;
`;

const FooternavText = styled.p`
  color: white;
  padding: 0.9rem 1rem;
  margin: 0.5rem 0.5rem;
  font-size: 1rem;
  cursor: pointer;
`;
