import { Link } from 'react-router-dom';
import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function LocationCard({
  id,
  name,
  type,
  dimension
}) {
  return (
    <Card bg="primary" text="white" className="mb-2">
      <Card.Header>
        {name}
      </Card.Header>
      <Card.Body>
        <ul>
          <li>Type: {type}</li>
          <li>{dimension}</li>
        </ul>
        <Button variant="secondary" as={Link} to={`/location/${id}`}>
          Ver más Detalles
        </Button>
      </Card.Body>
    </Card>
  );
}

export default LocationCard;
