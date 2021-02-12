import { Link } from 'react-router-dom';
import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function ExtendedCharactercard({
  id,
  name,
  status,
  species,
  type,
  gender,
  image,
  origin = {},
  location,
  episode
}) {
  return (
    <Card bg="primary" text="white" className="mb-2">
      <Card.Img variant="top" src={image} alt={name} title={name} />
      <Card.Header>
        {name} ({status})
      </Card.Header>
      <Card.Body>
        <ul>
          <li>Species: {species}</li>
          <li>Type: {type}</li>
          <li>Gender: {gender}</li>
          <li>Origin name: {origin.name}</li>
          <li>Origin link: {origin.link}</li>
          <li>Location name: {location.name}</li>
          <li>Location link: {location.link}</li>
          <li>Episodes array: {episode}</li>
        </ul>
        <Button variant="secondary" as={Link} to={`/characters/`}>
          Volver    
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ExtendedCharactercard;
