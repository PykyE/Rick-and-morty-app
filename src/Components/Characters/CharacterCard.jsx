import { Link } from 'react-router-dom';
import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import styles from "./CharacterCard.module.css";

function CharacterCard({
  id,
  name,
  status,
  species,
  gender,
  image,
  origin = {}
}) {
  return (
    <Card bg="primary" text="white" className="mb-2">
      <Card.Img variant="top" src={image} alt={name} title={name} />
      <Card.Header className={styles.myHeader}>
        {name} ({status})
      </Card.Header>
      <Card.Body>
        <ul>
          <li>Species: {species}</li>
          <li>Gender: {gender}</li>
          <li>Origin: {origin.name}</li>
        </ul>
        <div className={styles.btnContainer}>
          <Button variant="info" as={Link} to={`/characters/${id}`}>
            Ver más Detalles
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CharacterCard;
