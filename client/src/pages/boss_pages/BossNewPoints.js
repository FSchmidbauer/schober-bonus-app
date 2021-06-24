import { useState } from "react";
import styled from "styled-components";
import Albert from "../../images/albert-neueseite.jpg";
import Alex from "../../images/alex-neueseite.jpg";
import Andrea from "../../images/andrea-neueseite.jpg";
import Angelo from "../../images/angelo-neueseite.jpg";
import Berit from "../../images/berit-neueseite.jpg";
import Christine from "../../images/christine-neueseite.jpg";
import Claudia from "../../images/claudia-neueseite.jpg";
import Dominic from "../../images/dominic-neueseite.jpg";
import Ersin from "../../images/ersin-neueseite.jpg";
import Martin from "../../images/martin-neueseite.jpg";
import Matthias from "../../images/matthias-neueseite.jpg";
import Michael from "../../images/michael-neueseite.jpg";
import Niklas from "../../images/niklas-neueseite.jpg";
import Rene from "../../images/rene-neueseite.jpg";
import Sandra from "../../images/sandra-neueseite.jpg";

export default function BossNewPoints({
  onSetNewEmployeesWithPointsForConfirmation,
  newEmployeesWithPointsForConfirmation,
  onSetIsBossNewPoints,
  onSetIsBossPointsCheck,
}) {
  const [isPointsErrorMessage, setIsPointsErrorMessage] = useState(false);

  const employees = {
    albert: { name: "Albert", points: 0, image: Albert },
    alex: { name: "Alexander", points: 0, image: Alex },
    andrea: { name: "Andrea", points: 0, image: Andrea },
    angelo: { name: "Angelo", points: 0, image: Angelo },
    berit: { name: "Berit", points: 0, image: Berit },
    christine: { name: "Christine", points: 0, image: Christine },
    claudia: { name: "Claudia", points: 0, image: Claudia },
    dominic: { name: "Dominic", points: 0, image: Dominic },
    ersin: { name: "Ersin", points: 0, image: Ersin },
    martin: { name: "Martin", points: 0, image: Martin },
    matthias: { name: "Matthias", points: 0, image: Matthias },
    michael: { name: "Michael", points: 0, image: Michael },
    niklas: { name: "Niklas", points: 0, image: Niklas },
    rene: { name: "Rene", points: 0, image: Rene },
    sandra: { name: "Sandra", points: 0, image: Sandra },
  };

  function addPoints(employee) {
    if (!newEmployeesWithPointsForConfirmation[employee]) {
      const employeeGetsFirstPoint = employees[employee];
      employeeGetsFirstPoint.points += 1;
      onSetNewEmployeesWithPointsForConfirmation({
        ...newEmployeesWithPointsForConfirmation,
        [employee]: employeeGetsFirstPoint,
      });
    } else if (
      newEmployeesWithPointsForConfirmation[employee] &&
      newEmployeesWithPointsForConfirmation[employee].points !== 5
    ) {
      const employeeGetsMorePoints =
        newEmployeesWithPointsForConfirmation[employee];
      employeeGetsMorePoints.points = employeeGetsMorePoints.points + 1;
      onSetNewEmployeesWithPointsForConfirmation({
        ...newEmployeesWithPointsForConfirmation,
        [employee]: employeeGetsMorePoints,
      });
    } else {
      return;
    }
  }

  function subtractPoints(employee) {
    if (!newEmployeesWithPointsForConfirmation[employee]) {
      return;
    } else if (
      newEmployeesWithPointsForConfirmation[employee] &&
      newEmployeesWithPointsForConfirmation[employee].points !== 1
    ) {
      const employeeLoosesPoints =
        newEmployeesWithPointsForConfirmation[employee];
      employeeLoosesPoints.points = employeeLoosesPoints.points - 1;
      onSetNewEmployeesWithPointsForConfirmation({
        ...newEmployeesWithPointsForConfirmation,
        [employee]: employeeLoosesPoints,
      });
    } else if (newEmployeesWithPointsForConfirmation[employee].points === 1) {
      const employeeToRemove = newEmployeesWithPointsForConfirmation[employee];
      const remainingEmployees = Object.keys(
        newEmployeesWithPointsForConfirmation
      )
        .filter(
          (employee) =>
            newEmployeesWithPointsForConfirmation[employee].name !==
            employeeToRemove.name
        )
        .reduce((obj, employee) => {
          return {
            ...obj,
            [employee]: newEmployeesWithPointsForConfirmation[employee],
          };
        }, {});
      onSetNewEmployeesWithPointsForConfirmation(remainingEmployees);
    }
  }

  function showBossPointsCheck() {
    if (Object.keys(newEmployeesWithPointsForConfirmation).length !== 0) {
      onSetIsBossNewPoints(false);
      onSetIsBossPointsCheck(true);
    } else {
      setIsPointsErrorMessage(true);
    }
  }

  return (
    <>
      <h1>PUNKTEVERGABE</h1>
      <ActionInfo>
        Du kannst jedem Deiner Mitarbeiter bis zu fünf Bonuspunkte auf einmal
        geben.
      </ActionInfo>
      <EmpGrid>
        {Object.keys(employees).map((employee) => (
          <>
            <section>
              <EmpImage src={employees[employee].image} />
              <section>
                <MinusButton onClick={() => subtractPoints(employee)}>
                  -
                </MinusButton>
                <EmpInputfield
                  type="text"
                  name={employees[employee].name}
                  value={
                    newEmployeesWithPointsForConfirmation[employee]
                      ? newEmployeesWithPointsForConfirmation[employee].points
                      : employees[employee].points
                  }
                />
                <PlusButton onClick={() => addPoints(employee)}>+</PlusButton>
              </section>
            </section>
          </>
        ))}
      </EmpGrid>
      <CheckButton onClick={showBossPointsCheck}>Punkte prüfen</CheckButton>
      {isPointsErrorMessage && (
        <PointsError>
          Du musst zuerst Bonuspunkte vergeben, bevor Du auf diese Seite kannst.
        </PointsError>
      )}
    </>
  );
}

const ActionInfo = styled.h4`
  padding: 0 2rem;
`;

const CheckButton = styled.button`
  background-color: red;
  color: white;
  cursor: pointer;
  font-size: 1.5rem;
  margin: 3rem;
  padding: 1rem;
`;

const EmpGrid = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 1.5rem 0rem 0rem;
  place-items: center;
  row-gap: 3rem;
`;

const EmpImage = styled.img`
  border: 0.2rem solid black;
  border-radius: 3rem;
  height: 10rem;
  width: 10rem;
  padding: 0.3rem;
`;

const MinusButton = styled.button`
  background: red;
  border: 0.2rem solid red;
  border-radius: 10vw;
  color: white;
  cursor: pointer;
  font-size: 1.5rem;
  height: 3rem;
  width: 3rem;
`;

const PlusButton = styled.button`
  background: green;
  border: 0.2rem solid green;
  border-radius: 10vw;
  color: white;
  cursor: pointer;
  font-size: 1.5rem;
  height: 3rem;
  width: 3rem;
`;

const EmpInputfield = styled.input`
  border: none;
  font-size: 1.5rem;
  text-align: center;
  width: 3rem;
`;

const PointsError = styled.div`
  background-color: red;
  color: white;
  padding: 0.5rem;
`;
