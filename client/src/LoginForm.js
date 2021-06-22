import { useState } from "react";
import styled from "styled-components";

export default function LoginForm({
  onSetCreatedUser,
  createdUser,
  onSetIsNoUser,
  onSetIsUserIsBoss,
  onSetIsUserIsEmployee,
  onSetIsUserIsPartner,
  allEmployeesWithPoints,
  onSetIsThisUserOnApi,
  onSetShowPointsThisUserOnApi,
}) {
  const [isValidErrorMessage, setIsValidErrorMessage] = useState(false);

  function updateUser(event) {
    const fieldName = event.target.name;
    let fieldValue = event.target.value;
    onSetCreatedUser({ ...createdUser, [fieldName]: fieldValue });
  }

  function checkPointsThisUserOnApi() {
    if (
      Object.keys(allEmployeesWithPoints).find(
        (employee) =>
          allEmployeesWithPoints[employee].name ===
          createdUser.name.split(" ")[0].toLowerCase()
      )
    ) {
      const pointsOfUser = Object.values(
        allEmployeesWithPoints[
          Object.keys(allEmployeesWithPoints).find(
            (employee) =>
              allEmployeesWithPoints[employee].name ===
              createdUser.name.split(" ")[0].toLowerCase()
          )
        ]
      )[2];
      onSetIsThisUserOnApi(true);
      onSetShowPointsThisUserOnApi(pointsOfUser);
    } else {
      return;
    }
  }

  function showMainMenues(event) {
    if (
      createdUser.role === "geschaeftsfuehrer" &&
      createdUser.name === "Joachim Schober"
    ) {
      onSetIsNoUser(false);
      onSetIsUserIsBoss(true);
    } else if (
      createdUser.role === "mitarbeiter" &&
      (createdUser.name === "Albert Maier" ||
        createdUser.name === "Alexander Mayer" ||
        createdUser.name === "Andrea Breitenwinkler" ||
        createdUser.name === "Angelo Brandi")
    ) {
      checkPointsThisUserOnApi();
      onSetIsNoUser(false);
      onSetIsUserIsEmployee(true);
    } else if (createdUser.role === "partnerunternehmen") {
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
