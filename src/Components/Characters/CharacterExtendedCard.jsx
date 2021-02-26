import React from "react";
import Card from "react-bootstrap/Card";
import styles from './CharacterExtendedCard.module.css';

function ExtendedCharactercard({
  name,
  status,
  species,
  type,
  gender,
  image,
  origin=[],
  location = [],
  episode = [],
}) {
  return (
    <div className={styles.returnDiv}>
    <Card className={`${styles.card} mb-2`} bg="primary" text="white">
      <Card.Img className={(status==='Alive')?styles.cardImgAlive:styles.cardImgDead} src={image} alt={name} title={name}/>
      <Card.Header style={{textAlign: 'center',fontFamily:'Comic Sans MS', paddingBottom:'6px'}}>
          {name} ({status})
      </Card.Header>
      <Card.Body>
        <div className={styles.span} style={{borderStyle: 'double', width:'450px', padding:'10px'}}>
          <p style={{textAlign:'center',fontFamily:'Comic Sans MS'}}>Species: {species}</p>
          <p style={{textAlign:'center',fontFamily:'Comic Sans MS'}}>Type: {type === "" ? "Unknown" : type }</p>
          <p style={{textAlign:'center',fontFamily:'Comic Sans MS'}}>Gender: {gender}</p>
          <p style={{textAlign:'center',fontFamily:'Comic Sans MS'}}>Origin: {origin.name}</p>
          <p style={{textAlign:'center',fontFamily:'Comic Sans MS',marginBottom:'0'}}>Location: {location.name}</p>
        </div>
        <div className={styles.btnDiv}>
          <a className={`btn btn-secondary ${styles.btnSize}`} href="/characters">
            Volver
          </a>
        </div>
      </Card.Body>
    </Card>
    </div>
  );
}

export default ExtendedCharactercard;