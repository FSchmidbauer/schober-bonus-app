import { useState } from "react";
import styled from "styled-components";

export default function LoginForm({
  onSetLoggedInUser,
  loggedInUser,
  onSetIsNoUser,
  onSetIsUserIsBoss,
  onSetIsUserIsEmployee,
  onSetIsUserIsPartner,
  employeesWithPointsOnApi,
  onSetIsThisUserOnApi,
  onSetShowPointsThisUserOnApi,
}) {
  const [isValidErrorMessage, setIsValidErrorMessage] = useState(false);

  function updateUser(event) {
    const fieldName = event.target.name;
    let fieldValue = event.target.value;
    onSetLoggedInUser({ ...loggedInUser, [fieldName]: fieldValue });
  }

  function existingUser(employeesWithPointsOnApi, loggedInUser) {
    return employeesWithPointsOnApi.find(
      (employee) =>
        employee.name === loggedInUser.name.split(" ")[0].toLowerCase()
    );
  }

  function checkPointsThisUserOnApi() {
    const user = existingUser(employeesWithPointsOnApi, loggedInUser);
    if (user) {
      onSetIsThisUserOnApi(true);
      onSetShowPointsThisUserOnApi(user.points);
    } else {
      return;
    }
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
        loggedInUser.name === "Angelo Brandi")
    ) {
      checkPointsThisUserOnApi();
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
      <form onSubmit={showMainMenues}>
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
