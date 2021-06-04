import { useState } from "react";
import styled from "styled-components";

export default function LoginForm({
  onSetCreatedUser,
  createdUser,
  onSetNoUser,
  onSetUserIsBoss,
  onSetUserIsEmployee,
  onSetUserIsPartner,
}) {
  const [validErrorMessage, setValidErrorMessage] = useState(false);

  function updateUser(event) {
    const fieldName = event.target.name;
    let fieldValue = event.target.value;
    onSetCreatedUser({ ...createdUser, [fieldName]: fieldValue });
  }

  function showMainMenues(event) {
    if (
      createdUser.role === "geschaeftsfuehrer" &&
      createdUser.name === "Joachim Schober"
    ) {
      onSetNoUser(false);
      onSetUserIsBoss(true);
    } else if (
      createdUser.role === "mitarbeiter" &&
      createdUser.name === "Florian Schmidbauer"
    ) {
      onSetNoUser(false);
      onSetUserIsEmployee(true);
    } else if (createdUser.role === "partnerunternehmen") {
      onSetNoUser(false);
      onSetUserIsPartner(true);
    } else {
      event.preventDefault();
      setValidErrorMessage(true);
    }
  }

  return (
    <>
      {validErrorMessage && (
        <ValidError>
          Dieser Nutzer ist leider nicht hinterlegt.<br></br>Bitte überprüfe
          Deine Eingabe.
        </ValidError>
      )}
      <h1>LOGIN</h1>
      <form>
        <LoginRole htmlFor="role" name="role" id="role" onChange={updateUser}>
          <option>-- Bitte Rolle wählen --</option>
          <option name="role" value="geschaeftsfuehrer">
            Geschäftsführer
          </option>
          <option name="role" value="mitarbeiter">
            Mitarbeiter
          </option>
          <option name="role" value="partnerunternehmen">
            Partner-Unternehmen
          </option>
        </LoginRole>
        <LoginName
          type="text"
          name="name"
          placeholder="Dein Name"
          onChange={updateUser}
        />
        <LoginButton onClick={showMainMenues}>Login</LoginButton>
      </form>
    </>
  );
}

const ValidError = styled.div`
  background-color: red;
  color: white;
  padding: 0.5rem;
`;

const LoginRole = styled.select`
  border: 0.3rem solid black;
  border-radius: 1rem;
  font-size: 1.5rem;
  padding: 1rem;
  margin: 1rem;
  cursor: pointer;
`;

const LoginName = styled.input`
  border: 0.3rem solid black;
  border-radius: 1rem;
  font-size: 1.5rem;
  padding: 0.75rem;
  margin: 1rem;
  text-align: center;
  color: black;
`;

const LoginButton = styled.button`
  background-color: red;
  margin: 3rem;
  padding: 1rem;
  font-size: 1.5rem;
  color: white;
  cursor: pointer;
`;
