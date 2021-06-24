import { useState } from "react";
import styled from "styled-components";

export default function LoginForm({
  onSetLoggedInUser,
  loggedInUser,
  onSetIsNoUser,
  onSetIsUserIsBoss,
  onSetIsUserIsEmployee,
  onSetIsUserIsPartner,
  onCheckPointsThisEmployeeOnApi,
}) {
  const [isValidErrorMessage, setIsValidErrorMessage] = useState(false);

  function updateUser(event) {
    const fieldName = event.target.name;
    let fieldValue = event.target.value;
    onSetLoggedInUser({ ...loggedInUser, [fieldName]: fieldValue });
  }

  function showMainMenues(event) {
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
      event.preventDefault();
      setIsValidErrorMessage(true);
    }
  }

  return (
    <>
      {isValidErrorMessage && (
        <ValidError>
          Dieser Nutzer ist leider nicht hinterlegt.
          <br />
          Bitte überprüfe Deine Eingabe.
        </ValidError>
      )}
      <h1>LOGIN</h1>
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
          placeholder="Dein Name"
          onChange={updateUser}
        />
        <LoginButton>Login</LoginButton>
      </LoginFormMask>
    </>
  );
}

const ValidError = styled.div`
  background-color: red;
  color: white;
  padding: 0.5rem;
`;

const LoginFormMask = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 3rem;
`;

const LoginRole = styled.select`
  border: 0.3rem solid black;
  border-radius: 1rem;
  cursor: pointer;
  margin: 1rem 0;
  padding: 1rem;
`;

const LoginName = styled.input`
  border: 0.3rem solid black;
  border-radius: 1rem;
  color: black;
  margin: 1rem 0;
  padding: 0.75rem;
  text-align: center;
`;

const LoginButton = styled.button`
  background-color: red;
  color: white;
  cursor: pointer;
  margin: 2rem 4rem;
  padding: 1rem;
`;
