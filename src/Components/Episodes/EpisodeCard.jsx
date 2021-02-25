import { Link } from "react-router-dom";
import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import styles from "./EpisodeCard.module.css";
import S1 from "../../Resources/S1.png";
import S2 from "../../Resources/S2.png";
import S3 from "../../Resources/S3.png";
import S4 from "../../Resources/S4.png";

const getSeason = (name) => {
  let season = name.substring(1, 3);
  switch (season) {
    case "01":
      return S1;
    case "02":
      return S2;
    case "03":
      return S3;
    case "04":
      return S4;
    default:
      return S1;
  }
};

function EpisodeCard({ name, air_date, episode, id }) {
  return (
    <Card bg="primary" text="white" className="mb-2">
      <Card.Header className={styles.myHeader}>
        {name}
      </Card.Header>
      <Card.Img className = {styles.myImage} variant="top" src={getSeason(episode)} alt={name} title={name}/>
      <Card.Body>
        <ul>
          <li>On air date: {air_date}</li>
        </ul>
        <div className={styles.btnContainer}>
          <Button variant="info" as={Link} to={`/episode/${id}`}>
            Ver personajes
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default EpisodeCard;
