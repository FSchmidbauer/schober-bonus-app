import { useState } from "react";
import styled from "styled-components";
import Albert from "./images/albert-neueseite.jpg";
import Alex from "./images/alex-neueseite.jpg";
import Andrea from "./images/andrea-neueseite.jpg";
import Angelo from "./images/angelo-neueseite.jpg";
import Berit from "./images/berit-neueseite.jpg";
import Christine from "./images/christine-neueseite.jpg";
import Claudia from "./images/claudia-neueseite.jpg";
import Dominic from "./images/dominic-neueseite.jpg";
import Ersin from "./images/ersin-neueseite.jpg";
import Martin from "./images/martin-neueseite.jpg";
import Michael from "./images/michael-neueseite.jpg";
import Matthias from "./images/matthias-neueseite.jpg";
import Niklas from "./images/niklas-neueseite.jpg";
import Rene from "./images/rene-neueseite.jpg";
import Sandra from "./images/sandra-neueseite.jpg";

export default function BossEmpOverview({
  onSetBossViewEmployees,
  onSetBossViewEmpPointsCheck,
  newPointsCounterAlbert,
  onSetNewPointsCounterAlbert,
  newPointsCounterAlex,
  onSetNewPointsCounterAlex,
  newPointsCounterAndrea,
  onSetNewPointsCounterAndrea,
  newPointsCounterAngelo,
  onSetNewPointsCounterAngelo,
  newPointsCounterBerit,
  onSetNewPointsCounterBerit,
  newPointsCounterChristine,
  onSetNewPointsCounterChristine,
  newPointsCounterClaudia,
  onSetNewPointsCounterClaudia,
  newPointsCounterDominic,
  onSetNewPointsCounterDominic,
  newPointsCounterErsin,
  onSetNewPointsCounterErsin,
  newPointsCounterMartin,
  onSetNewPointsCounterMartin,
  newPointsCounterMatthias,
  onSetNewPointsCounterMatthias,
  newPointsCounterMichael,
  onSetNewPointsCounterMichael,
  newPointsCounterNiklas,
  onSetNewPointsCounterNiklas,
  newPointsCounterRene,
  onSetNewPointsCounterRene,
  newPointsCounterSandra,
  onSetNewPointsCounterSandra,
}) {
  function subtractPoints(onSetNewPointsCounter, newPointsCounter) {
    if (newPointsCounter !== 0) {
      onSetNewPointsCounter(newPointsCounter - 1);
    }
  }

  function addPoints(onSetNewPointsCounter, newPointsCounter) {
    if (newPointsCounter !== 5) {
      onSetNewPointsCounter(newPointsCounter + 1);
    }
  }

  function showEmpPointsCheck() {
    onSetBossViewEmployees(false);
    onSetBossViewEmpPointsCheck(true);
  }

  return (
    <>
      <h1>PUNKTEVERGABE</h1>
      <ActionInfo>
        Du kannst jedem Deiner Mitarbeiter bis zu fünf Bonuspunkte geben.
      </ActionInfo>
      <EmpGrid>
        <section>
          <EmpImage src={Albert} />
          <section>
            <MinusButton
              onClick={() =>
                subtractPoints(
                  onSetNewPointsCounterAlbert,
                  newPointsCounterAlbert
                )
              }
            >
              -
            </MinusButton>
            <EmpInputfield type="text" value={newPointsCounterAlbert} />
            <PlusButton
              onClick={() =>
                addPoints(onSetNewPointsCounterAlbert, newPointsCounterAlbert)
              }
            >
              +
            </PlusButton>
          </section>
        </section>
        <section>
          <EmpImage src={Alex} />
          <section name="Alex">
            <MinusButton
              onClick={() =>
                subtractPoints(onSetNewPointsCounterAlex, newPointsCounterAlex)
              }
            >
              -
            </MinusButton>
            <EmpInputfield type="text" value={newPointsCounterAlex} />
            <PlusButton
              onClick={() =>
                addPoints(onSetNewPointsCounterAlex, newPointsCounterAlex)
              }
            >
              +
            </PlusButton>
          </section>
        </section>
        <section>
          <EmpImage src={Andrea} />
          <section>
            <MinusButton
              onClick={() =>
                subtractPoints(
                  onSetNewPointsCounterAndrea,
                  newPointsCounterAndrea
                )
              }
            >
              -
            </MinusButton>
            <EmpInputfield
              type="text"
              name="Andrea"
              value={newPointsCounterAndrea}
            />
            <PlusButton
              onClick={() =>
                addPoints(onSetNewPointsCounterAndrea, newPointsCounterAndrea)
              }
            >
              +
            </PlusButton>
          </section>
        </section>
        <section>
          <EmpImage src={Angelo} />
          <section>
            <MinusButton
              onClick={() =>
                subtractPoints(
                  onSetNewPointsCounterAngelo,
                  newPointsCounterAngelo
                )
              }
            >
              -
            </MinusButton>
            <EmpInputfield
              type="text"
              name="Angelo"
              value={newPointsCounterAngelo}
            />
            <PlusButton
              onClick={() =>
                addPoints(onSetNewPointsCounterAngelo, newPointsCounterAngelo)
              }
            >
              +
            </PlusButton>
          </section>
        </section>
        <section>
          <EmpImage src={Berit} />
          <section>
            <MinusButton
              onClick={() =>
                subtractPoints(
                  onSetNewPointsCounterBerit,
                  newPointsCounterBerit
                )
              }
            >
              -
            </MinusButton>
            <EmpInputfield
              type="text"
              name="Berit"
              value={newPointsCounterBerit}
            />
            <PlusButton
              onClick={() =>
                addPoints(onSetNewPointsCounterBerit, newPointsCounterBerit)
              }
            >
              +
            </PlusButton>
          </section>
        </section>
        <section>
          <EmpImage src={Christine} />
          <section>
            <MinusButton
              onClick={() =>
                subtractPoints(
                  onSetNewPointsCounterChristine,
                  newPointsCounterChristine
                )
              }
            >
              -
            </MinusButton>
            <EmpInputfield
              type="text"
              name="Christine"
              value={newPointsCounterChristine}
            />
            <PlusButton
              onClick={() =>
                addPoints(
                  onSetNewPointsCounterChristine,
                  newPointsCounterChristine
                )
              }
            >
              +
            </PlusButton>
          </section>
        </section>
        <section>
          <EmpImage src={Claudia} />
          <section>
            <MinusButton
              onClick={() =>
                subtractPoints(
                  onSetNewPointsCounterClaudia,
                  newPointsCounterClaudia
                )
              }
            >
              -
            </MinusButton>
            <EmpInputfield
              type="text"
              name="Claudia"
              value={newPointsCounterClaudia}
            />
            <PlusButton
              onClick={() =>
                addPoints(onSetNewPointsCounterClaudia, newPointsCounterClaudia)
              }
            >
              +
            </PlusButton>
          </section>
        </section>
        <section>
          <EmpImage src={Dominic} />
          <section>
            <MinusButton
              onClick={() =>
                subtractPoints(
                  onSetNewPointsCounterDominic,
                  newPointsCounterDominic
                )
              }
            >
              -
            </MinusButton>
            <EmpInputfield
              type="text"
              name="Dominic"
              value={newPointsCounterDominic}
            />
            <PlusButton
              onClick={() =>
                addPoints(onSetNewPointsCounterDominic, newPointsCounterDominic)
              }
            >
              +
            </PlusButton>
          </section>
        </section>
        <section>
          <EmpImage src={Ersin} />
          <section>
            <MinusButton
              onClick={() =>
                subtractPoints(
                  onSetNewPointsCounterErsin,
                  newPointsCounterErsin
                )
              }
            >
              -
            </MinusButton>
            <EmpInputfield
              type="text"
              name="Ersin"
              value={newPointsCounterErsin}
            />
            <PlusButton
              onClick={() =>
                addPoints(onSetNewPointsCounterErsin, newPointsCounterErsin)
              }
            >
              +
            </PlusButton>
          </section>
        </section>
        <section>
          <EmpImage src={Martin} />
          <section>
            <MinusButton
              onClick={() =>
                subtractPoints(
                  onSetNewPointsCounterMartin,
                  newPointsCounterMartin
                )
              }
            >
              -
            </MinusButton>
            <EmpInputfield
              type="text"
              name="Martin"
              value={newPointsCounterMartin}
            />
            <PlusButton
              onClick={() =>
                addPoints(onSetNewPointsCounterMartin, newPointsCounterMartin)
              }
            >
              +
            </PlusButton>
          </section>
        </section>
        <section>
          <EmpImage src={Michael} />
          <section>
            <MinusButton
              onClick={() =>
                subtractPoints(
                  onSetNewPointsCounterMichael,
                  newPointsCounterMichael
                )
              }
            >
              -
            </MinusButton>
            <EmpInputfield
              type="text"
              name="Michael"
              value={newPointsCounterMichael}
            />
            <PlusButton
              onClick={() =>
                addPoints(onSetNewPointsCounterMichael, newPointsCounterMichael)
              }
            >
              +
            </PlusButton>
          </section>
        </section>
        <section>
          <EmpImage src={Matthias} />
          <section>
            <MinusButton
              onClick={() =>
                subtractPoints(
                  onSetNewPointsCounterMatthias,
                  newPointsCounterMatthias
                )
              }
            >
              -
            </MinusButton>
            <EmpInputfield
              type="text"
              name="Matthias"
              value={newPointsCounterMatthias}
            />
            <PlusButton
              onClick={() =>
                addPoints(
                  onSetNewPointsCounterMatthias,
                  newPointsCounterMatthias
                )
              }
            >
              +
            </PlusButton>
          </section>
        </section>
        <section>
          <EmpImage src={Niklas} />
          <section>
            <MinusButton
              onClick={() =>
                subtractPoints(
                  onSetNewPointsCounterNiklas,
                  newPointsCounterNiklas
                )
              }
            >
              -
            </MinusButton>
            <EmpInputfield
              type="text"
              name="Niklas"
              value={newPointsCounterNiklas}
            />
            <PlusButton
              onClick={() =>
                addPoints(onSetNewPointsCounterNiklas, newPointsCounterNiklas)
              }
            >
              +
            </PlusButton>
          </section>
        </section>
        <section>
          <EmpImage src={Rene} />
          <section>
            <MinusButton
              onClick={() =>
                subtractPoints(onSetNewPointsCounterRene, newPointsCounterRene)
              }
            >
              -
            </MinusButton>
            <EmpInputfield
              type="text"
              name="Rene"
              value={newPointsCounterRene}
            />
            <PlusButton
              onClick={() =>
                addPoints(onSetNewPointsCounterRene, newPointsCounterRene)
              }
            >
              +
            </PlusButton>
          </section>
        </section>
        <section>
          <EmpImage src={Sandra} />
          <section>
            <MinusButton
              onClick={() =>
                subtractPoints(
                  onSetNewPointsCounterSandra,
                  newPointsCounterSandra
                )
              }
            >
              -
            </MinusButton>
            <EmpInputfield
              type="text"
              name="Sandra"
              value={newPointsCounterSandra}
            />
            <PlusButton
              onClick={() =>
                addPoints(onSetNewPointsCounterSandra, newPointsCounterSandra)
              }
            >
              +
            </PlusButton>
          </section>
        </section>
      </EmpGrid>
      <CheckButton onClick={showEmpPointsCheck}>Punkte prüfen</CheckButton>
    </>
  );
}

const ActionInfo = styled.h4`
  padding: 0 2rem;
`;

const CheckButton = styled.button`
  background-color: red;
  margin: 3rem;
  padding: 1rem;
  font-size: 1.5rem;
  color: white;
  cursor: pointer;
`;

const EmpGrid = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
  row-gap: 3rem;
  margin: 1.5rem 0rem 0rem;
`;

const EmpImage = styled.img`
  padding: 0.3rem;
  width: 10rem;
  height: 10rem;
  border: 0.2rem solid black;
  border-radius: 3rem;
`;

const MinusButton = styled.button`
  background: red;
  color: white;
  font-size: 1.5rem;
  border: 0.2rem solid red;
  border-radius: 10vw;
  width: 3rem;
  height: 3rem;
  cursor: pointer;
`;

const PlusButton = styled.button`
  background: green;
  color: white;
  font-size: 1.5rem;
  border: 0.2rem solid green;
  border-radius: 10vw;
  width: 3rem;
  height: 3rem;
  cursor: pointer;
`;

const EmpInputfield = styled.input`
  border: none;
  text-align: center;
  width: 3rem;
  font-size: 1.5rem;
`;
