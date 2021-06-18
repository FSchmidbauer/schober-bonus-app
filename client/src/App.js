import { useState, useEffect } from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   NavLink,
// } from "react-router-dom";
import styled from "styled-components";

import SchoberLogo from "./images/logo-autohaus-schober.png";

import LoginForm from "./LoginForm.js";

import BossMain from "./boss_pages/BossMain.js";
import BossNewPoints from "./boss_pages/BossNewPoints.js";
import BossPointsCheck from "./boss_pages/BossPointsCheck.js";
import BossPointsArePublished from "./boss_pages/BossPointsArePublished.js";
import BossVoucherOverview from "./boss_pages/BossVoucherOverview.js";

import EmployeeMain from "./employee_pages/EmployeeMain.js";
import EmployeeVoucherChoice from "./employee_pages/EmployeeVoucherChoice.js";
import EmployeeVoucherCheck from "./employee_pages/EmployeeVoucherCheck.js";
import EmployeeVoucherIsAcquired from "./employee_pages/EmployeeVoucherIsAcquired.js";

import PartnerMain from "./partner_pages/PartnerMain.js";
import PartnerNewVoucher from "./partner_pages/PartnerNewVoucher.js";
import PartnerVoucherCheck from "./partner_pages/PartnerVoucherCheck.js";
import PartnerVoucherIsPublished from "./partner_pages/PartnerVoucherIsPublished.js";

export default function App() {
  const [isNoUser, setIsNoUser] = useState(true);
  const [createdUser, setCreatedUser] = useState(null);
  const [isThisUserOnApi, setIsThisUserOnApi] = useState(false);
  const [showPointsThisUserOnApi, setShowPointsThisUserOnApi] = useState();

  const [isUserIsBoss, setIsUserIsBoss] = useState(false);
  const [isBossNewPoints, setIsBossNewPoints] = useState(false);
  const [isBossPointsCheck, setIsBossPointsCheck] = useState(false);
  const [isBossPointsArePublished, setIsBossPointsArePublished] =
    useState(false);
  const [isBossVoucherOverview, setIsBossVoucherOverview] = useState(false);

  const [isUserIsEmployee, setIsUserIsEmployee] = useState(false);
  const [isEmployeeVoucherChoice, setIsEmployeeVoucherChoice] = useState(false);
  const [isEmployeeVoucherCheck, setIsEmployeeVoucherCheck] = useState(false);
  const [isEmployeeVoucherIsAcquired, setIsEmployeeVoucherIsAcquired] =
    useState(false);

  const [voucherToConfirm, setVoucherToConfirm] = useState(null);
  const [confirmedVouchers, setConfirmedVouchers] = useState([]);
  const [allVouchers, setAllVouchers] = useState([]);
  const [chosenVouchers, setChosenVouchers] = useState([]);

  const [employeesWithPoints, setEmployeesWithPoints] = useState({});
  const [confirmedEmployeesWithPoints, setConfirmedEmployeesWithPoints] =
    useState([]);
  const [allEmployeesWithPoints, setAllEmployeesWithPoints] = useState({});

  const [isUserIsPartner, setIsUserIsPartner] = useState(false);
  const [isPartnerNewVoucher, setIsPartnerNewVoucher] = useState(false);
  const [isPartnerVoucherCheck, setIsPartnerVoucherCheck] = useState(false);
  const [isPartnerVoucherIsPublished, setIsPartnerVoucherIsPublished] =
    useState(false);

  function goBackToHome() {
    setIsNoUser(true);
    // setActivePage("login");
  }

  useEffect(() => {
    fetch("http://localhost:4000/emppoints")
      .then((result) => result.json())
      .then((apiEmployees) => setAllEmployeesWithPoints(apiEmployees))
      .then((error) => console.error(error));
  }, []);

  function confirmVoucher(voucherToBeConfirmed) {
    fetch("http://localhost:4000/vouchers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(voucherToBeConfirmed),
    })
      .then((result) => result.json())
      .then((voucherConfirmed) =>
        setConfirmedVouchers(...confirmedVouchers, voucherConfirmed)
      )
      .catch((error) => console.error(error));
    setIsPartnerVoucherCheck(false);
    setIsPartnerVoucherIsPublished(true);
  }

  function confirmPoints(awardedEmp) {
    fetch("http://localhost:4000/emppoints", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(awardedEmp),
    })
      .then((result) => result.json())
      .then((newConfirmedEmployeesWithPoints) =>
        setConfirmedEmployeesWithPoints(
          ...confirmedEmployeesWithPoints,
          newConfirmedEmployeesWithPoints
        )
      )
      .catch((error) => console.error(error));
    setIsBossPointsCheck(false);
    setIsBossPointsArePublished(true);
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
    setIsEmployeeVoucherCheck(false);
    setIsEmployeeVoucherIsAcquired(true);
  }

  return (
    <>
      <header>
        <HeaderImage src={SchoberLogo} onClick={goBackToHome} />
        <HeaderHeadline>BONUS-APP</HeaderHeadline>
      </header>
      <Main>
        {isNoUser && (
          <LoginForm
            onSetCreatedUser={setCreatedUser}
            createdUser={createdUser}
            onSetIsNoUser={setIsNoUser}
            onSetIsUserIsBoss={setIsUserIsBoss}
            onSetIsUserIsEmployee={setIsUserIsEmployee}
            onSetIsUserIsPartner={setIsUserIsPartner}
            allEmployeesWithPoints={allEmployeesWithPoints}
            onSetIsThisUserOnApi={setIsThisUserOnApi}
            onSetShowPointsThisUserOnApi={setShowPointsThisUserOnApi}
          />
        )}
        {isUserIsBoss && (
          <BossMain
            createdUser={createdUser}
            onSetIsUserIsBoss={setIsUserIsBoss}
            onSetIsBossNewPoints={setIsBossNewPoints}
            onSetIsBossVoucherOverview={setIsBossVoucherOverview}
          />
        )}
        {isBossNewPoints && (
          <BossNewPoints
            onSetEmployeesWithPoints={setEmployeesWithPoints}
            employeesWithPoints={employeesWithPoints}
            onSetIsBossNewPoints={setIsBossNewPoints}
            onSetIsBossPointsCheck={setIsBossPointsCheck}
          />
        )}
        {isBossPointsCheck && (
          <BossPointsCheck
            employeesWithPoints={employeesWithPoints}
            onConfirmPoints={confirmPoints}
          />
        )}
        {isBossPointsArePublished && (
          <BossPointsArePublished
            onSetEmployeesWithPoints={setEmployeesWithPoints}
            onSetIsBossPointsArePublished={setIsBossPointsArePublished}
            onSetIsBossNewPoints={setIsBossNewPoints}
          />
        )}
        {isBossVoucherOverview && (
          <BossVoucherOverview
            allVouchers={allVouchers}
            onSetAllVouchers={setAllVouchers}
          />
        )}
        {isUserIsEmployee && (
          <EmployeeMain
            createdUser={createdUser}
            onSetIsUserIsEmployee={setIsUserIsEmployee}
            onSetIsEmployeeVoucherChoice={setIsEmployeeVoucherChoice}
            isThisUserOnApi={isThisUserOnApi}
            showPointsThisUserOnApi={showPointsThisUserOnApi}
          />
        )}
        {isEmployeeVoucherChoice && (
          <EmployeeVoucherChoice
            onSetAllVouchers={setAllVouchers}
            allVouchers={allVouchers}
            onSetChosenVouchers={setChosenVouchers}
            chosenVouchers={chosenVouchers}
            onSetIsEmployeeVoucherChoice={setIsEmployeeVoucherChoice}
            onSetIsEmployeeVoucherCheck={setIsEmployeeVoucherCheck}
            isThisUserOnApi={isThisUserOnApi}
            showPointsThisUserOnApi={showPointsThisUserOnApi}
          />
        )}
        {isEmployeeVoucherCheck && (
          <EmployeeVoucherCheck
            chosenVouchers={chosenVouchers}
            onAcquireAndDeleteForOthersVoucher={
              acquireAndDeleteForOthersVoucher
            }
          />
        )}
        {isEmployeeVoucherIsAcquired && (
          <EmployeeVoucherIsAcquired
            onSetChosenVouchers={setChosenVouchers}
            onSetIsEmployeeVoucherIsAcquired={setIsEmployeeVoucherIsAcquired}
            onSetIsEmployeeVoucherChoice={setIsEmployeeVoucherChoice}
          />
        )}
        {isUserIsPartner && (
          <PartnerMain
            createdUser={createdUser}
            onSetIsUserIsPartner={setIsUserIsPartner}
            onSetIsPartnerNewVoucher={setIsPartnerNewVoucher}
          />
        )}
        {isPartnerNewVoucher && (
          <PartnerNewVoucher
            onSetVoucherToConfirm={setVoucherToConfirm}
            onSetIsPartnerNewVoucher={setIsPartnerNewVoucher}
            onSetIsPartnerVoucherCheck={setIsPartnerVoucherCheck}
          />
        )}
        {isPartnerVoucherCheck && (
          <PartnerVoucherCheck
            onConfirmVoucher={confirmVoucher}
            voucherToConfirm={voucherToConfirm}
          />
        )}
        {isPartnerVoucherIsPublished && (
          <PartnerVoucherIsPublished
            onSetIsPartnerNewVoucher={setIsPartnerNewVoucher}
            onSetIsPartnerVoucherIsPublished={setIsPartnerVoucherIsPublished}
          />
        )}
      </Main>
      <Footernav>
        {!isNoUser && <FooternavButton>Hauptmenü</FooternavButton>}
        {!isNoUser && <FooternavButton>Logout</FooternavButton>}
        {isNoUser && <FooternavText>© by Florian Schmidbauer</FooternavText>}
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
