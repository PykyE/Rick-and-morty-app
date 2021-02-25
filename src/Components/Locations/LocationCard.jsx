import { Link } from 'react-router-dom';
import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import styles from './LocationCard.module.css';

function LocationCard({
  id,
  name,
  type,
  dimension
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
          <Button variant="info" as={Link} to={`/location/${id}`}>
            Ver residentes
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default LocationCard;
