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
  cursor: pointer;
  font-size: 1.5rem;
  margin: 1rem;
  padding: 1rem;
`;

const LoginName = styled.input`
  border: 0.3rem solid black;
  border-radius: 1rem;
  color: black;
  font-size: 1.5rem;
  margin: 1rem;
  padding: 0.75rem;
  text-align: center;
`;

const LoginButton = styled.button`
  background-color: red;
  color: white;
  cursor: pointer;
  font-size: 1.5rem;
  margin: 3rem;
  padding: 1rem;
`;
