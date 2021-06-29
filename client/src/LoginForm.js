import { useState, useEffect } from "react";
import styled from "styled-components";

export default function LoginForm({
  onSetLoggedInUser,
  loggedInUser,
  onSetIsNoUser,
  onSetIsUserIsBoss,
  onSetIsUserIsEmployee,
  onSetIsUserIsPartner,
  onCheckPointsThisEmployeeOnApi,
  onSetEmployeesWithPointsOnApi,
}) {
  useEffect(() => {
    fetch("/emppoints")
      .then((result) => result.json())
      .then((apiEmployees) => onSetEmployeesWithPointsOnApi(apiEmployees))
      .then((error) => console.error(error));
  }, []);

  const [isValidErrorMessage, setIsValidErrorMessage] = useState(false);

  function updateUser(event) {
    const fieldName = event.target.name;
    let fieldValue = event.target.value;
    onSetLoggedInUser({ ...loggedInUser, [fieldName]: fieldValue });
  }

  function showMainMenues(event) {
    event.preventDefault();
    if (loggedInUser) {
      decideWhichMenuToShow();
    } else {
      setIsValidErrorMessage(true);
      setTimeout(() => {
        setIsValidErrorMessage(false);
      }, 2000);
    }
  }

  function decideWhichMenuToShow() {
    if (
      loggedInUser.role === "geschaeftsfuehrer" &&
      loggedInUser.name === "Joachim Schober"
    ) {
      onSetIsNoUser(false);
      onSetIsUserIsBoss(true);
    } else if (
      loggedInUser.role === "mitarbeiter" &&
      (loggedInUser.name === "Albert Maier" ||
        loggedInUser.name === "Alexander Mayer" ||
        loggedInUser.name === "Andrea Breitenwinkler" ||
        loggedInUser.name === "Angelo Brandi" ||
        loggedInUser.name === "Berit Dörnfelder" ||
        loggedInUser.name === "Christine Schick" ||
        loggedInUser.name === "Claudia Thomsen" ||
        loggedInUser.name === "Dominic Lohr" ||
        loggedInUser.name === "Ersin Alatza" ||
        loggedInUser.name === "Martin Gilnhammer" ||
        loggedInUser.name === "Matthias List" ||
        loggedInUser.name === "Michael Aslanides" ||
        loggedInUser.name === "Niklas Neumayer" ||
        loggedInUser.name === "Rene Bungert" ||
        loggedInUser.name === "Sandra Hinterseer")
    ) {
      onCheckPointsThisEmployeeOnApi();
      onSetIsNoUser(false);
      onSetIsUserIsEmployee(true);
    } else if (
      loggedInUser.role === "partnerunternehmen" &&
      loggedInUser.name &&
      loggedInUser.name.length > 3 &&
      isNaN(loggedInUser.name) &&
      loggedInUser.name.includes(" ")
    ) {
      onSetIsNoUser(false);
      onSetIsUserIsPartner(true);
    } else {
      setIsValidErrorMessage(true);
      setTimeout(() => {
        setIsValidErrorMessage(false);
      }, 2000);
    }
  }

  return (
    <>
      <h1>STARTSEITE</h1>
      <LoginFormMask onSubmit={showMainMenues}>
        <LoginRole name="role" onChange={updateUser}>
          <option value="notChosen">-- Bitte Rolle wählen --</option>
          <option value="geschaeftsfuehrer">Geschäftsführer</option>
          <option value="mitarbeiter">Mitarbeiter</option>
          <option value="partnerunternehmen">Partner-Unternehmen</option>
        </LoginRole>
        <LoginName
          type="text"
          name="name"
          placeholder={
            loggedInUser && loggedInUser.role === "partnerunternehmen"
              ? "Name Ansprechpartner"
              : "Vor- und Nachname"
          }
          onChange={updateUser}
        />
        {isValidErrorMessage && (
          <ValidError>
            Dieser Nutzer ist leider nicht hinterlegt. Bitte Eingabe überprüfen.
          </ValidError>
        )}
        <LoginButton>Login</LoginButton>
      </LoginFormMask>
    </>
  );
}

const LoginFormMask = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0 2rem;
`;

const LoginRole = styled.select`
  border: 0.3rem solid black;
  border-radius: 1rem;
  cursor: pointer;
  font-size: 1.2rem;
  height: 6rem;
  margin: 1rem 0;
  padding: 1rem;
`;

const LoginName = styled.input`
  border: 0.3rem solid black;
  border-radius: 1rem;
  color: black;
  font-size: 1.5rem;
  height: 6rem;
  margin: 1rem 0;
  padding: 0.75rem;
  text-align: center;
`;

const ValidError = styled.div`
  background-color: red;
  color: white;
  padding: 0.5rem;
`;

const LoginButton = styled.button`
  border: none;
  background-color: black;
  border-bottom: 0.5rem solid red;
  color: white;
  cursor: pointer;
  font-size: 1.5rem;
  margin: 1rem 4rem;
  padding: 1rem;
`;
