import { useState } from "react";
import styled from "styled-components";

import SchoberLogo from "./images/logo-autohaus-schober.png";

import LoginForm from "./LoginForm.js";

import BossMain from "./pages/boss_pages/BossMain.js";
import BossNewPoints from "./pages/boss_pages/BossNewPoints.js";
import BossPointsCheck from "./pages/boss_pages/BossPointsCheck.js";
import BossPointsArePublished from "./pages/boss_pages/BossPointsArePublished.js";
import BossVoucherOverview from "./pages/boss_pages/BossVoucherOverview.js";

import EmployeeMain from "./pages/employee_pages/EmployeeMain.js";
import EmployeeVoucherChoice from "./pages/employee_pages/EmployeeVoucherChoice.js";
import EmployeeVoucherCheck from "./pages/employee_pages/EmployeeVoucherCheck.js";
import EmployeeVoucherIsAcquired from "./pages/employee_pages/EmployeeVoucherIsAcquired.js";

import PartnerMain from "./pages/partner_pages/PartnerMain.js";
import PartnerNewVoucher from "./pages/partner_pages/PartnerNewVoucher.js";
import PartnerVoucherCheck from "./pages/partner_pages/PartnerVoucherCheck.js";
import PartnerVoucherIsPublished from "./pages/partner_pages/PartnerVoucherIsPublished.js";

export default function App() {
  const [isNoUser, setIsNoUser] = useState(true);
  const [loggedInUser, setLoggedInUser] = useState();
  const [isThisEmployeeOnApi, setIsThisEmployeeOnApi] = useState(false);
  const [pointsThisEmployeeOnApi, setPointsThisEmployeeOnApi] = useState();

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

  const [isUserIsPartner, setIsUserIsPartner] = useState(false);
  const [isPartnerNewVoucher, setIsPartnerNewVoucher] = useState(false);
  const [isPartnerVoucherCheck, setIsPartnerVoucherCheck] = useState(false);
  const [isPartnerVoucherIsPublished, setIsPartnerVoucherIsPublished] =
    useState(false);

  const [
    newPartnerVoucherForConfirmation,
    setNewPartnerVoucherForConfirmation,
  ] = useState([]);
  const [vouchersOnApi, setVouchersOnApi] = useState([]);
  const [chosenByEmployeeVouchers, setChosenByEmployeeVouchers] = useState([]);

  const [
    newEmployeesWithPointsForConfirmation,
    setNewEmployeesWithPointsForConfirmation,
  ] = useState({});
  const [employeesWithPointsOnApi, setEmployeesWithPointsOnApi] = useState({});

  function goBackToHome() {
    setLoggedInUser();
    setIsNoUser(true);
    setIsUserIsBoss(false);
    setIsBossNewPoints(false);
    setIsBossPointsCheck(false);
    setIsBossPointsArePublished(false);
    setIsBossVoucherOverview(false);
    setIsUserIsEmployee(false);
    setIsEmployeeVoucherChoice(false);
    setIsEmployeeVoucherCheck(false);
    setIsEmployeeVoucherIsAcquired(false);
    setIsUserIsPartner(false);
    setIsPartnerNewVoucher(false);
    setIsPartnerVoucherCheck(false);
    setIsPartnerVoucherIsPublished(false);
    // setActivePage("login");
  }

  function goBackToMain() {
    if (
      isUserIsBoss ||
      isBossNewPoints ||
      isBossPointsCheck ||
      isBossPointsArePublished ||
      isBossVoucherOverview
    ) {
      setNewEmployeesWithPointsForConfirmation({});
      setIsBossNewPoints(false);
      setIsBossPointsCheck(false);
      setIsBossPointsArePublished(false);
      setIsBossVoucherOverview(false);
      setIsUserIsBoss(true);
    } else if (
      isUserIsEmployee ||
      isEmployeeVoucherChoice ||
      isEmployeeVoucherCheck ||
      isEmployeeVoucherIsAcquired
    ) {
      checkPointsThisEmployeeOnApi();
      setIsEmployeeVoucherChoice(false);
      setIsEmployeeVoucherCheck(false);
      setIsEmployeeVoucherIsAcquired(false);
      setIsUserIsEmployee(true);
    } else if (
      isUserIsPartner ||
      isPartnerNewVoucher ||
      isPartnerVoucherCheck ||
      isPartnerVoucherIsPublished
    ) {
      setIsPartnerNewVoucher(false);
      setIsPartnerVoucherCheck(false);
      setIsPartnerVoucherIsPublished(false);
      setIsUserIsPartner(true);
    }
  }

  function checkPointsThisEmployeeOnApi() {
    const user = existingUser(employeesWithPointsOnApi, loggedInUser);
    if (user) {
      setIsThisEmployeeOnApi(true);
      setPointsThisEmployeeOnApi(user.points);
    } else {
      return;
    }
  }

  function existingUser(employeesWithPointsOnApi, loggedInUser) {
    return employeesWithPointsOnApi.find(
      (employee) =>
        employee.name === loggedInUser.name.split(" ")[0].toLowerCase()
    );
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
            onSetLoggedInUser={setLoggedInUser}
            loggedInUser={loggedInUser}
            onSetIsNoUser={setIsNoUser}
            onSetIsUserIsBoss={setIsUserIsBoss}
            onSetIsUserIsEmployee={setIsUserIsEmployee}
            onSetIsUserIsPartner={setIsUserIsPartner}
            onCheckPointsThisEmployeeOnApi={checkPointsThisEmployeeOnApi}
            onSetEmployeesWithPointsOnApi={setEmployeesWithPointsOnApi}
          />
        )}
        {isUserIsBoss && (
          <BossMain
            loggedInUser={loggedInUser}
            onSetIsUserIsBoss={setIsUserIsBoss}
            onSetIsBossNewPoints={setIsBossNewPoints}
            onSetIsBossVoucherOverview={setIsBossVoucherOverview}
            onSetVouchersOnApi={setVouchersOnApi}
          />
        )}
        {isBossNewPoints && (
          <BossNewPoints
            onSetNewEmployeesWithPointsForConfirmation={
              setNewEmployeesWithPointsForConfirmation
            }
            newEmployeesWithPointsForConfirmation={
              newEmployeesWithPointsForConfirmation
            }
            onSetIsBossNewPoints={setIsBossNewPoints}
            onSetIsBossPointsCheck={setIsBossPointsCheck}
          />
        )}
        {isBossPointsCheck && (
          <BossPointsCheck
            onSetNewEmployeesWithPointsForConfirmation={
              setNewEmployeesWithPointsForConfirmation
            }
            newEmployeesWithPointsForConfirmation={
              newEmployeesWithPointsForConfirmation
            }
            onSetIsBossPointsCheck={setIsBossPointsCheck}
            onSetIsBossPointsArePublished={setIsBossPointsArePublished}
            onSetIsBossNewPoints={setIsBossNewPoints}
            onSetEmployeesWithPointsOnApi={setEmployeesWithPointsOnApi}
          />
        )}
        {isBossPointsArePublished && (
          <BossPointsArePublished
            loggedInUser={loggedInUser}
            onSetNewEmployeesWithPointsForConfirmation={
              setNewEmployeesWithPointsForConfirmation
            }
            onSetIsBossPointsArePublished={setIsBossPointsArePublished}
            onSetIsBossNewPoints={setIsBossNewPoints}
          />
        )}
        {isBossVoucherOverview && (
          <BossVoucherOverview vouchersOnApi={vouchersOnApi} />
        )}
        {isUserIsEmployee && (
          <EmployeeMain
            loggedInUser={loggedInUser}
            onSetIsUserIsEmployee={setIsUserIsEmployee}
            onSetIsEmployeeVoucherChoice={setIsEmployeeVoucherChoice}
            isThisEmployeeOnApi={isThisEmployeeOnApi}
            pointsThisEmployeeOnApi={pointsThisEmployeeOnApi}
            onSetVouchersOnApi={setVouchersOnApi}
          />
        )}
        {isEmployeeVoucherChoice && (
          <EmployeeVoucherChoice
            loggedInUser={loggedInUser}
            onSetVouchersOnApi={setVouchersOnApi}
            vouchersOnApi={vouchersOnApi}
            onSetChosenByEmployeeVouchers={setChosenByEmployeeVouchers}
            chosenByEmployeeVouchers={chosenByEmployeeVouchers}
            onSetIsEmployeeVoucherChoice={setIsEmployeeVoucherChoice}
            onSetIsEmployeeVoucherCheck={setIsEmployeeVoucherCheck}
            isThisEmployeeOnApi={isThisEmployeeOnApi}
            pointsThisEmployeeOnApi={pointsThisEmployeeOnApi}
          />
        )}
        {isEmployeeVoucherCheck && (
          <EmployeeVoucherCheck
            onSetChosenByEmployeeVouchers={setChosenByEmployeeVouchers}
            chosenByEmployeeVouchers={chosenByEmployeeVouchers}
            onSetIsEmployeeVoucherChoice={setIsEmployeeVoucherChoice}
            onSetIsEmployeeVoucherCheck={setIsEmployeeVoucherCheck}
            onSetIsEmployeeVoucherIsAcquired={setIsEmployeeVoucherIsAcquired}
            onSetVouchersOnApi={setVouchersOnApi}
            vouchersOnApi={vouchersOnApi}
            loggedInUser={loggedInUser}
            onSetEmployeesWithPointsOnApi={setEmployeesWithPointsOnApi}
            employeesWithPointsOnApi={employeesWithPointsOnApi}
          />
        )}
        {isEmployeeVoucherIsAcquired && (
          <EmployeeVoucherIsAcquired
            loggedInUser={loggedInUser}
            onSetChosenByEmployeeVouchers={setChosenByEmployeeVouchers}
            onSetIsEmployeeVoucherIsAcquired={setIsEmployeeVoucherIsAcquired}
            onSetIsEmployeeVoucherChoice={setIsEmployeeVoucherChoice}
            onCheckPointsThisEmployeeOnApi={checkPointsThisEmployeeOnApi}
          />
        )}
        {isUserIsPartner && (
          <PartnerMain
            loggedInUser={loggedInUser}
            onSetIsUserIsPartner={setIsUserIsPartner}
            onSetIsPartnerNewVoucher={setIsPartnerNewVoucher}
          />
        )}
        {isPartnerNewVoucher && (
          <PartnerNewVoucher
            onSetNewPartnerVoucherForConfirmation={
              setNewPartnerVoucherForConfirmation
            }
            onSetIsPartnerNewVoucher={setIsPartnerNewVoucher}
            onSetIsPartnerVoucherCheck={setIsPartnerVoucherCheck}
          />
        )}
        {isPartnerVoucherCheck && (
          <PartnerVoucherCheck
            newPartnerVoucherForConfirmation={newPartnerVoucherForConfirmation}
            onSetIsPartnerVoucherCheck={setIsPartnerVoucherCheck}
            onSetIsPartnerVoucherIsPublished={setIsPartnerVoucherIsPublished}
            onSetIsPartnerNewVoucher={setIsPartnerNewVoucher}
          />
        )}
        {isPartnerVoucherIsPublished && (
          <PartnerVoucherIsPublished
            loggedInUser={loggedInUser}
            onSetIsPartnerNewVoucher={setIsPartnerNewVoucher}
            onSetIsPartnerVoucherIsPublished={setIsPartnerVoucherIsPublished}
          />
        )}
      </Main>
      <Footernav>
        {!isNoUser && (
          <FooternavButton onClick={goBackToMain}>Hauptmenü</FooternavButton>
        )}
        {!isNoUser && (
          <FooternavButton onClick={goBackToHome}>Logout</FooternavButton>
        )}
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
