import { useState } from "react";
import styled from "styled-components";

export default function LoginForm() {
  const [noUser, setNoUser] = useState(true);
  const [userIsBoss, setUserIsBoss] = useState(false);
  const [userIsEmployee, setUserIsEmployee] = useState(false);
  const [userIsPartner, setUserIsPartner] = useState(false);
  const [createdUser, setCreatedUser] = useState(null);

  function updateUser(event) {
    const fieldName = event.target.name;
    let fieldValue = event.target.value;
    setCreatedUser({ ...createdUser, [fieldName]: fieldValue });
  }

  function showBossMenu() {
    if (
      createdUser.role === "geschaeftsfuehrer" &&
      createdUser.name === "Joachim"
    ) {
      setNoUser(false);
      setUserIsBoss(true);
    }
  }

  console.log(userIsBoss);

  return (
    <>
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
        <LoginButton onClick={showBossMenu}>Login</LoginButton>
      </form>
    </>
  );
}

const LoginRole = styled.select`
  border: 0.3rem solid black;
  border-radius: 1rem;
  font-size: 1.5rem;
  padding: 1rem;
  margin: 1rem;
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
