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
import BossNewPoints from "./BossNewPoints.js";
import BossPointsCheck from "./BossPointsCheck.js";
import BossPointsArePublished from "./BossPointsArePublished.js";
import BossVoucherOverview from "./BossVoucherOverview.js";

import EmployeeMain from "./EmployeeMain.js";
import EmployeeVoucherChoice from "./EmployeeVoucherChoice.js";
import EmployeeVoucherCheck from "./EmployeeVoucherCheck.js";
import EmployeeVoucherIsAcquired from "./EmployeeVoucherIsAcquired.js";

import PartnerMain from "./PartnerMain.js";
import PartnerNewVoucher from "./PartnerNewVoucher.js";
import PartnerVoucherCheck from "./PartnerVoucherCheck.js";
import PartnerVoucherIsPublished from "./PartnerVoucherIsPublished.js";

export default function App() {
  const [noUser, setNoUser] = useState(true);
  const [createdUser, setCreatedUser] = useState(null);

  const [userIsBoss, setUserIsBoss] = useState(false);
  const [bossNewPoints, setBossNewPoints] = useState(false);
  const [bossPointsCheck, setBossPointsCheck] = useState(false);
  const [bossPointsArePublished, setBossPointsArePublished] = useState(false);
  const [bossVoucherOverview, setBossVoucherOverview] = useState(false);

  const [userIsEmployee, setUserIsEmployee] = useState(false);
  const [employeeVoucherChoice, setEmployeeVoucherChoice] = useState(false);
  const [employeeVoucherCheck, setEmployeeVoucherCheck] = useState(false);
  const [employeeVoucherIsAcquired, setEmployeeVoucherIsAcquired] =
    useState(false);

  const [createdVoucher, setCreatedVoucher] = useState(null);
  const [voucherToConfirm, setVoucherToConfirm] = useState(null);
  const [confirmedVouchers, setConfirmedVouchers] = useState([]);
  const [allVouchers, setAllVouchers] = useState([]);
  const [chosenVouchers, setChosenVouchers] = useState([]);

  const [userIsPartner, setUserIsPartner] = useState(false);
  const [partnerNewVoucher, setPartnerNewVoucher] = useState(false);
  const [partnerVoucherCheck, setPartnerVoucherCheck] = useState(false);
  const [partnerVoucherIsPublished, setPartnerVoucherIsPublished] =
    useState(false);

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

  const [allPointsCounterAlbert, setAllPointsCounterAlbert] = useState(0);
  const [allPointsCounterAlex, setAllPointsCounterAlex] = useState(0);
  const [allPointsCounterAndrea, setAllPointsCounterAndrea] = useState(0);
  const [allPointsCounterAngelo, setAllPointsCounterAngelo] = useState(0);
  const [allPointsCounterBerit, setAllPointsCounterBerit] = useState(0);
  const [allPointsCounterClaudia, setAllPointsCounterClaudia] = useState(0);
  const [allPointsCounterChristine, setAllPointsCounterChristine] = useState(0);
  const [allPointsCounterDominic, setAllPointsCounterDominic] = useState(0);
  const [allPointsCounterErsin, setAllPointsCounterErsin] = useState(0);
  const [allPointsCounterMartin, setAllPointsCounterMartin] = useState(0);
  const [allPointsCounterMatthias, setAllPointsCounterMatthias] = useState(0);
  const [allPointsCounterMichael, setAllPointsCounterMichael] = useState(0);
  const [allPointsCounterNiklas, setAllPointsCounterNiklas] = useState(0);
  const [allPointsCounterRene, setAllPointsCounterRene] = useState(0);
  const [allPointsCounterSandra, setAllPointsCounterSandra] = useState(0);

  function goBackToHome() {
    setNoUser(true);
  }

  function confirmVoucher(voucherToBeConfirmed) {
    fetch("http://localhost:4000/vouchers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(voucherToBeConfirmed),
    })
      .then((result) => result.json())
      .then(
        (voucherConfirmed) =>
          setConfirmedVouchers(...confirmedVouchers, voucherConfirmed),
        setPartnerVoucherCheck(false),
        setPartnerVoucherIsPublished(true)
      )
      .catch((error) => console.error(error));
  }

  function confirmPoints() {
    setAllPointsCounterAlbert(allPointsCounterAlbert + newPointsCounterAlbert);
    setAllPointsCounterAlex(allPointsCounterAlex + newPointsCounterAlex);
    setAllPointsCounterAndrea(allPointsCounterAndrea + newPointsCounterAndrea);
    setAllPointsCounterAngelo(allPointsCounterAngelo + newPointsCounterAngelo);
    setAllPointsCounterBerit(allPointsCounterBerit + newPointsCounterBerit);
    setAllPointsCounterChristine(
      allPointsCounterChristine + newPointsCounterChristine
    );
    setAllPointsCounterClaudia(
      allPointsCounterClaudia + newPointsCounterClaudia
    );
    setAllPointsCounterDominic(
      allPointsCounterDominic + newPointsCounterDominic
    );
    setAllPointsCounterErsin(allPointsCounterErsin + newPointsCounterErsin);
    setAllPointsCounterMartin(allPointsCounterMartin + newPointsCounterMartin);
    setAllPointsCounterMatthias(
      allPointsCounterMatthias + newPointsCounterMatthias
    );
    setAllPointsCounterMichael(
      allPointsCounterMichael + newPointsCounterMichael
    );
    setAllPointsCounterNiklas(allPointsCounterNiklas + newPointsCounterNiklas);
    setAllPointsCounterRene(allPointsCounterRene + newPointsCounterRene);
    setAllPointsCounterSandra(allPointsCounterSandra + newPointsCounterSandra);
    setNewPointsCounterAlbert(0);
    setNewPointsCounterAlex(0);
    setNewPointsCounterAndrea(0);
    setNewPointsCounterAngelo(0);
    setNewPointsCounterBerit(0);
    setNewPointsCounterChristine(0);
    setNewPointsCounterClaudia(0);
    setNewPointsCounterDominic(0);
    setNewPointsCounterErsin(0);
    setNewPointsCounterMartin(0);
    setNewPointsCounterMatthias(0);
    setNewPointsCounterMichael(0);
    setNewPointsCounterNiklas(0);
    setNewPointsCounterRene(0);
    setNewPointsCounterSandra(0);
    setBossPointsCheck(false);
    setBossPointsArePublished(true);
  }

  function acquireAndDeleteForOthersVoucher() {
    chosenVouchers.map((voucherToBeDeleted) => {
      fetch("http://localhost:4000/vouchers/" + voucherToBeDeleted._id, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((result) => result.json())
        .then((response) => {
          if (response.data && response.data._id) {
            const vouchersToKeep = allVouchers.filter(
              (voucher) => voucher._id !== response.data._id
            );
            setAllVouchers(vouchersToKeep);
          } else {
            console.log("Voucher could not be deleted.");
          }
        });
    });
    setChosenVouchers([]);
    setEmployeeVoucherCheck(false);
    setEmployeeVoucherIsAcquired(true);
  }

  return (
    <>
      <header>
        <HeaderImage src={SchoberLogo} onClick={goBackToHome} />
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
            onSetBossNewPoints={setBossNewPoints}
            onSetBossVoucherOverview={setBossVoucherOverview}
          />
        )}
        {bossNewPoints && (
          <BossNewPoints
            onSetBossNewPoints={setBossNewPoints}
            onSetBossPointsCheck={setBossPointsCheck}
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
        {bossPointsCheck && (
          <BossPointsCheck
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
            onConfirmPoints={confirmPoints}
          />
        )}
        {bossPointsArePublished && (
          <BossPointsArePublished
            onSetBossPointsArePublished={setBossPointsArePublished}
            onSetBossNewPoints={setBossNewPoints}
          />
        )}
        {bossVoucherOverview && (
          <BossVoucherOverview
            allVouchers={allVouchers}
            onSetAllVouchers={setAllVouchers}
          />
        )}
        {userIsEmployee && (
          <EmployeeMain
            createdUser={createdUser}
            onSetUserIsEmployee={setUserIsEmployee}
            onSetEmployeeVoucherChoice={setEmployeeVoucherChoice}
          />
        )}
        {employeeVoucherChoice && (
          <EmployeeVoucherChoice
            onSetAllVouchers={setAllVouchers}
            allVouchers={allVouchers}
            onSetChosenVouchers={setChosenVouchers}
            chosenVouchers={chosenVouchers}
            onSetEmployeeVoucherChoice={setEmployeeVoucherChoice}
            onSetEmployeeVoucherCheck={setEmployeeVoucherCheck}
          />
        )}
        {employeeVoucherCheck && (
          <EmployeeVoucherCheck
            chosenVouchers={chosenVouchers}
            onAcquireAndDeleteForOthersVoucher={
              acquireAndDeleteForOthersVoucher
            }
          />
        )}
        {employeeVoucherIsAcquired && (
          <EmployeeVoucherIsAcquired
            onSetEmployeeVoucherIsAcquired={setEmployeeVoucherIsAcquired}
            onSetEmployeeVoucherChoice={setEmployeeVoucherChoice}
          />
        )}
        {userIsPartner && (
          <PartnerMain
            createdUser={createdUser}
            onSetUserIsPartner={setUserIsPartner}
            onSetPartnerNewVoucher={setPartnerNewVoucher}
          />
        )}
        {partnerNewVoucher && (
          <PartnerNewVoucher
            createdVoucher={createdVoucher}
            onSetCreatedVoucher={setCreatedVoucher}
            onSetVoucherToConfirm={setVoucherToConfirm}
            onSetPartnerNewVoucher={setPartnerNewVoucher}
            onSetPartnerVoucherCheck={setPartnerVoucherCheck}
          />
        )}
        {partnerVoucherCheck && (
          <PartnerVoucherCheck
            onConfirmVoucher={confirmVoucher}
            voucherToConfirm={voucherToConfirm}
          />
        )}
        {partnerVoucherIsPublished && (
          <PartnerVoucherIsPublished
            onSetPartnerNewVoucher={setPartnerNewVoucher}
            onSetPartnerVoucherIsPublished={setPartnerVoucherIsPublished}
          />
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
  cursor: pointer;
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
