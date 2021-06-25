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
  });

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
        loggedInUser.name === "Christine Schick")
    ) {
      onCheckPointsThisEmployeeOnApi();
      onSetIsNoUser(false);
      onSetIsUserIsEmployee(true);
    } else if (loggedInUser.role === "partnerunternehmen") {
      onSetIsNoUser(false);
      onSetIsUserIsPartner(true);
    } else {
      setIsValidErrorMessage(true);
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
          placeholder="Vor- und Nachname"
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
  padding: 0 1rem;
`;

const LoginRole = styled.select`
  border: 0.3rem solid black;
  border-radius: 1rem;
  cursor: pointer;
  height: 4rem;
  margin: 1rem 0;
  padding: 1rem;
`;

const LoginName = styled.input`
  border: 0.3rem solid black;
  border-radius: 1rem;
  color: black;
  height: 4rem;
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
  margin: 1rem 8rem;
  padding: 1rem;
`;
