import { Link } from 'react-router-dom';
import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function EpisodeCard({
  id,
  name,
  air_date,
  code
}) {
  return (
    <Card bg="primary" text="white" className="mb-2">
      <Card.Header>
        {name}
      </Card.Header>
      <Card.Body>
        <ul>
          <li>On air date: {air_date}</li>
          <li>Code: {code}</li>
        </ul>
        <Button variant="secondary" as={Link} to={`/episode/${id}`}>
          Ver más Detalles
        </Button>
      </Card.Body>
    </Card>
  );
}

export default EpisodeCard;
