import { useState } from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   NavLink,
// } from "react-router-dom";
import styled from "styled-components";
import SchoberLogo from "./images/logo-autohaus-schober.png";
import LoginForm from "./LoginForm.js";
import BossMain from "./BossMain.js";
import BossEmpOverview from "./BossEmpOverview.js";
import BossViewEmpPoints from "./BossViewEmpPoints.js";
import EmployeeMain from "./EmployeeMain.js";
import PartnerMain from "./PartnerMain.js";
import PartnerNewVoucher from "./PartnerNewVoucher.js";
import PartnerVoucherCheck from "./PartnerVoucherCheck.js";

export default function App() {
  const [noUser, setNoUser] = useState(true);
  const [createdUser, setCreatedUser] = useState(null);
  const [userIsBoss, setUserIsBoss] = useState(false);
  const [bossViewEmployees, setBossViewEmployees] = useState(false);
  const [bossViewEmpPointsCheck, setBossViewEmpPointsCheck] = useState(false);
  const [userIsEmployee, setUserIsEmployee] = useState(false);
  const [createdVoucher, setCreatedVoucher] = useState(null);
  const [userIsPartner, setUserIsPartner] = useState(false);
  const [partnerCreateNewVoucher, setPartnerCreateNewVoucher] = useState(false);
  const [partnerVoucherCheck, setPartnerVoucherCheck] = useState(false);

  const [newPointsCounterAlbert, setNewPointsCounterAlbert] = useState(0);
  const [newPointsCounterAlex, setNewPointsCounterAlex] = useState(0);
  const [newPointsCounterAndrea, setNewPointsCounterAndrea] = useState(0);
  const [newPointsCounterAngelo, setNewPointsCounterAngelo] = useState(0);
  const [newPointsCounterBerit, setNewPointsCounterBerit] = useState(0);
  const [newPointsCounterClaudia, setNewPointsCounterClaudia] = useState(0);
  const [newPointsCounterChristine, setNewPointsCounterChristine] = useState(0);
  const [newPointsCounterDominic, setNewPointsCounterDominic] = useState(0);
  const [newPointsCounterErsin, setNewPointsCounterErsin] = useState(0);
  const [newPointsCounterMartin, setNewPointsCounterMartin] = useState(0);
  const [newPointsCounterMatthias, setNewPointsCounterMatthias] = useState(0);
  const [newPointsCounterMichael, setNewPointsCounterMichael] = useState(0);
  const [newPointsCounterNiklas, setNewPointsCounterNiklas] = useState(0);
  const [newPointsCounterRene, setNewPointsCounterRene] = useState(0);
  const [newPointsCounterSandra, setNewPointsCounterSandra] = useState(0);

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
        {userIsBoss && (
          <BossMain
            createdUser={createdUser}
            onSetUserIsBoss={setUserIsBoss}
            onSetBossViewEmployees={setBossViewEmployees}
          />
        )}
        {bossViewEmployees && (
          <BossEmpOverview
            onSetBossViewEmployees={setBossViewEmployees}
            onSetBossViewEmpPointsCheck={setBossViewEmpPointsCheck}
            newPointsCounterAlbert={newPointsCounterAlbert}
            onSetNewPointsCounterAlbert={setNewPointsCounterAlbert}
            newPointsCounterAlex={newPointsCounterAlex}
            onSetNewPointsCounterAlex={setNewPointsCounterAlex}
            newPointsCounterAndrea={newPointsCounterAndrea}
            onSetNewPointsCounterAndrea={setNewPointsCounterAndrea}
            newPointsCounterAngelo={newPointsCounterAngelo}
            onSetNewPointsCounterAngelo={setNewPointsCounterAngelo}
            newPointsCounterBerit={newPointsCounterBerit}
            onSetNewPointsCounterBerit={setNewPointsCounterBerit}
            newPointsCounterChristine={newPointsCounterChristine}
            onSetNewPointsCounterChristine={setNewPointsCounterChristine}
            newPointsCounterClaudia={newPointsCounterClaudia}
            onSetNewPointsCounterClaudia={setNewPointsCounterClaudia}
            newPointsCounterDominic={newPointsCounterDominic}
            onSetNewPointsCounterDominic={setNewPointsCounterDominic}
            newPointsCounterErsin={newPointsCounterErsin}
            onSetNewPointsCounterErsin={setNewPointsCounterErsin}
            newPointsCounterMartin={newPointsCounterMartin}
            onSetNewPointsCounterMartin={setNewPointsCounterMartin}
            newPointsCounterMatthias={newPointsCounterMatthias}
            onSetNewPointsCounterMatthias={setNewPointsCounterMatthias}
            newPointsCounterMichael={newPointsCounterMichael}
            onSetNewPointsCounterMichael={setNewPointsCounterMichael}
            newPointsCounterNiklas={newPointsCounterNiklas}
            onSetNewPointsCounterNiklas={setNewPointsCounterNiklas}
            newPointsCounterRene={newPointsCounterRene}
            onSetNewPointsCounterRene={setNewPointsCounterRene}
            newPointsCounterSandra={newPointsCounterSandra}
            onSetNewPointsCounterSandra={setNewPointsCounterSandra}
          />
        )}
        {bossViewEmpPointsCheck && (
          <BossViewEmpPoints
            newPointsCounterAlbert={newPointsCounterAlbert}
            newPointsCounterAlex={newPointsCounterAlex}
            newPointsCounterAndrea={newPointsCounterAndrea}
            newPointsCounterAngelo={newPointsCounterAngelo}
            newPointsCounterBerit={newPointsCounterBerit}
            newPointsCounterChristine={newPointsCounterChristine}
            newPointsCounterClaudia={newPointsCounterClaudia}
            newPointsCounterDominic={newPointsCounterDominic}
            newPointsCounterErsin={newPointsCounterErsin}
            newPointsCounterMartin={newPointsCounterMartin}
            newPointsCounterMatthias={newPointsCounterMatthias}
            newPointsCounterMichael={newPointsCounterMichael}
            newPointsCounterNiklas={newPointsCounterNiklas}
            newPointsCounterRene={newPointsCounterRene}
            newPointsCounterSandra={newPointsCounterSandra}
          />
        )}
        {userIsEmployee && <EmployeeMain createdUser={createdUser} />}
        {userIsPartner && (
          <PartnerMain
            createdUser={createdUser}
            onSetUserIsPartner={setUserIsPartner}
            onSetPartnerCreateNewVoucher={setPartnerCreateNewVoucher}
          />
        )}
        {partnerCreateNewVoucher && (
          <PartnerNewVoucher
            createdVoucher={createdVoucher}
            onSetCreatedVoucher={setCreatedVoucher}
            onSetPartnerCreateNewVoucher={setPartnerCreateNewVoucher}
            onSetPartnerVoucherCheck={setPartnerVoucherCheck}
          />
        )}
        {partnerVoucherCheck && (
          <PartnerVoucherCheck createdVoucher={createdVoucher} />
        )}
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
`;

const HeaderHeadline = styled.section`
  background-color: black;
  border-bottom: 0.2rem solid red;
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
  border-top: 0.2rem solid red;
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
