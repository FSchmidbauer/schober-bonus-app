import styled from "styled-components";

export default function BossPointsCheck({
  onSetNewEmployeesWithPointsForConfirmation,
  newEmployeesWithPointsForConfirmation,
  onSetIsBossPointsCheck,
  onSetIsBossPointsArePublished,
  onSetIsBossNewPoints,
  onSetEmployeesWithPointsOnApi,
}) {
  function jumpOnLastPage() {
    onSetNewEmployeesWithPointsForConfirmation({});
    onSetIsBossPointsCheck(false);
    onSetIsBossNewPoints(true);
  }

  function confirmPoints(awardedEmps) {
    fetch("/emppoints", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(awardedEmps),
    })
      .then((result) => result.json())
      .then((updatedEmpData) => onSetEmployeesWithPointsOnApi(updatedEmpData))
      .catch((error) => console.error(error));
    onSetIsBossPointsCheck(false);
    onSetIsBossPointsArePublished(true);
  }

  return (
    <>
      <h1>PUNKTE-CHECK</h1>
      <ActionInfo>
        Du hast folgenden Mitarbeitern neue Bonuspunkte gegeben:
      </ActionInfo>
      {Object.keys(newEmployeesWithPointsForConfirmation).map(
        (employee, index) => (
          <>
            <EmpWithNewPoints key={index}>
              <img
                src={newEmployeesWithPointsForConfirmation[employee].image}
                alt="Zu bestätigender Mitarbeiter mit neuen Bonuspunkten"
              />
              <p>
                <span>
                  {newEmployeesWithPointsForConfirmation[employee].points}
                </span>{" "}
                Punkt(e)
              </p>
            </EmpWithNewPoints>
            <EmpCommentInput
              type="text"
              name="begruendung"
              placeholder="Begründung (optional)"
            />
          </>
        )
      )}
      <ButtonSection>
        <CorrectButton onClick={jumpOnLastPage}>Anpassen</CorrectButton>
        <ConfirmButton
          onClick={() => confirmPoints(newEmployeesWithPointsForConfirmation)}
        >
          Bestätigen
        </ConfirmButton>
      </ButtonSection>
    </>
  );
}

const ActionInfo = styled.h4`
  padding: 0 2rem;
`;

const EmpWithNewPoints = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  padding: 0.2rem;
  margin: 2rem 0 2rem;

  img {
    border: 0.2rem solid black;
    border-radius: 3rem;
    max-height: 8rem;
    max-width: 8rem;
    padding: 0.3rem;
  }

  p {
    span {
      color: red;
    }
  }
`;

const EmpCommentInput = styled.input`
  border: 0.1rem solid black;
  color: black;
  height: 6rem;
  margin-bottom: 2rem;
  padding: 0 3rem;
  text-align: center;
`;

const ButtonSection = styled.section`
  display: flex;
  justify-content: space-around;
`;

const CorrectButton = styled.button`
  border: none;
  background-color: white;
  color: red;
  cursor: pointer;
  font-size: 1.5rem;
  padding: 1rem;

  :hover {
    background-color: red;
    color: white;
  }
`;

const ConfirmButton = styled.button`
  border: none;
  background-color: black;
  border-bottom: 0.5rem solid red;
  color: white;
  cursor: pointer;
  font-size: 1.5rem;
  padding: 1rem;
`;
