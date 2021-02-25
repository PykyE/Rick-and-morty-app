import { Link } from 'react-router-dom';
import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import styles from './LocationCard.module.css';
import {getEndNumber} from '../../Utils/URLTools';

const getCharacters = (residents) => {
  let res = "";
  for (let i = 0; i < Object.keys(residents).length; i++) {
    let num = getEndNumber(residents[i]); 
    res += (i!==Object.keys(residents).length-1)?`${num},`:num;
  }
  return res;
};

function LocationCard({
  name,
  type,
  dimension,
  residents
}) {
  return (
    <Card bg="primary" text="white" className="mb-2">
      <Card.Header className={styles.myHeader}>
        {name}
      </Card.Header>
      <Card.Body>
        <ul>
          <li>Type: {type}</li>
          <li>Dimensión: {dimension}</li>
        </ul>
        <div className={styles.btnContainer}>
        <>{(residents.length!==0)?
          <Button variant="info" as={Link} to={`/characters/list/${getCharacters(residents)}`}>
            Ver residentes
          </Button>:<>
          <div className={styles.noResidentsDiv}>Planeta sin residentes</div>
          </>}</>
        </div>
      </Card.Body>
    </Card>
  );
}

export default LocationCard;
