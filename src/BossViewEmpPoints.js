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

export default function BossViewEmpPoints({
  newPointsCounterAlbert,
  newPointsCounterAlex,
  newPointsCounterAndrea,
  newPointsCounterAngelo,
  newPointsCounterBerit,
  newPointsCounterChristine,
  newPointsCounterClaudia,
  newPointsCounterDominic,
  newPointsCounterErsin,
  newPointsCounterMartin,
  newPointsCounterMatthias,
  newPointsCounterMichael,
  newPointsCounterNiklas,
  newPointsCounterRene,
  newPointsCounterSandra,
}) {
  return (
    <>
      <h1>PUNKTE-CHECK</h1>
      <h4>You gave new bonuspoints to the following employees.</h4>
      {newPointsCounterAlbert !== 0 && (
        <EmpWithNewPoints>
          <img src={Albert} />
          <p>
            <span>{newPointsCounterAlbert}</span> Punkt(e)
          </p>
        </EmpWithNewPoints>
      )}
      {newPointsCounterAlex !== 0 && (
        <EmpWithNewPoints>
          <img src={Alex} />
          <p>
            <span>{newPointsCounterAlex}</span> Punkt(e)
          </p>
        </EmpWithNewPoints>
      )}
      {newPointsCounterAndrea !== 0 && (
        <EmpWithNewPoints>
          <img src={Andrea} />
          <p>
            <span>{newPointsCounterAndrea}</span> Punkt(e)
          </p>
        </EmpWithNewPoints>
      )}
      {newPointsCounterAngelo !== 0 && (
        <EmpWithNewPoints>
          <img src={Angelo} />
          <p>
            <span>{newPointsCounterAngelo}</span> Punkt(e)
          </p>
        </EmpWithNewPoints>
      )}
      {newPointsCounterBerit !== 0 && (
        <EmpWithNewPoints>
          <img src={Berit} />
          <p>
            <span>{newPointsCounterBerit}</span> Punkt(e)
          </p>
        </EmpWithNewPoints>
      )}
      {newPointsCounterChristine !== 0 && (
        <EmpWithNewPoints>
          <img src={Christine} />
          <p>
            <span>{newPointsCounterChristine}</span> Punkt(e)
          </p>
        </EmpWithNewPoints>
      )}
      {newPointsCounterClaudia !== 0 && (
        <EmpWithNewPoints>
          <img src={Claudia} />
          <p>
            <span>{newPointsCounterClaudia}</span> Punkt(e)
          </p>
        </EmpWithNewPoints>
      )}
      {newPointsCounterDominic !== 0 && (
        <EmpWithNewPoints>
          <img src={Dominic} />
          <p>
            <span>{newPointsCounterDominic}</span> Punkt(e)
          </p>
        </EmpWithNewPoints>
      )}
      {newPointsCounterErsin !== 0 && (
        <EmpWithNewPoints>
          <img src={Ersin} />
          <p>
            <span>{newPointsCounterErsin}</span> Punkt(e)
          </p>
        </EmpWithNewPoints>
      )}
      {newPointsCounterMartin !== 0 && (
        <EmpWithNewPoints>
          <img src={Martin} />
          <p>
            <span>{newPointsCounterMartin}</span> Punkt(e)
          </p>
        </EmpWithNewPoints>
      )}
      {newPointsCounterMatthias !== 0 && (
        <EmpWithNewPoints>
          <img src={Matthias} />
          <p>
            <span>{newPointsCounterMatthias}</span> Punkt(e)
          </p>
        </EmpWithNewPoints>
      )}
      {newPointsCounterMichael !== 0 && (
        <EmpWithNewPoints>
          <img src={Michael} />
          <p>
            <span>{newPointsCounterMichael}</span> Punkt(e)
          </p>
        </EmpWithNewPoints>
      )}
      {newPointsCounterNiklas !== 0 && (
        <EmpWithNewPoints>
          <img src={Niklas} />
          <p>
            <span>{newPointsCounterNiklas}</span> Punkt(e)
          </p>
        </EmpWithNewPoints>
      )}
      {newPointsCounterRene !== 0 && (
        <EmpWithNewPoints>
          <img src={Rene} />
          <p>
            <span>{newPointsCounterRene}</span> Punkt(e)
          </p>
        </EmpWithNewPoints>
      )}
      {newPointsCounterSandra !== 0 && (
        <EmpWithNewPoints>
          <img src={Sandra} />
          <p>
            <span>{newPointsCounterSandra}</span> Punkt(e)
          </p>
        </EmpWithNewPoints>
      )}
      <h4>Confirm?</h4>
    </>
  );
}

const EmpWithNewPoints = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  padding: 0.2rem;
  margin: 1rem;
  border: 0.2rem solid black;
  border-radius: 10vw;

  img {
    padding: 0.3rem;
    width: 10rem;
    height: 10rem;
    border-radius: 10vw;
  }

  p {
    span {
      color: red;
    }
  }
`;
