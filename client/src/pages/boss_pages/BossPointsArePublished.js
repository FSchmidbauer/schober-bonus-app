import styled from "styled-components";

export default function BossPointsArePublished({
  loggedInUser,
  onSetNewEmployeesWithPointsForConfirmation,
  onSetIsBossPointsArePublished,
  onSetIsBossNewPoints,
}) {
  function giveMorePoints() {
    onSetNewEmployeesWithPointsForConfirmation({});
    onSetIsBossPointsArePublished(false);
    onSetIsBossNewPoints(true);
  }

  return (
    <>
      <h1>VIELEN DANK, {loggedInUser.name.split(" ")[0].toUpperCase()}!</h1>
      <ActionInfo>Deine Bonuspunkte wurden erfolgreich vergeben.</ActionInfo>
      <MorePointsButton onClick={giveMorePoints}>
        Weitere Punkte vergeben
      </MorePointsButton>
    </>
  );
}

const ActionInfo = styled.h4`
  padding: 0 2rem;
`;

const MorePointsButton = styled.button`
  background-color: red;
  margin: 3rem;
  padding: 1rem;
  font-size: 1.5rem;
  color: white;
  cursor: pointer;
`;
