import React from "react";
import usePageTitle from "Hooks/usePageTitle";
import background from "Public/Background.jpg";
import Jumbotron from "react-bootstrap/Jumbotron";
import styles from "./Home.module.css";

function Home() {
  usePageTitle();
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        opacity: 1,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      <Jumbotron className={styles.jumbotron}>
        <h2>Rick and morty react project</h2>
        <p>
          <a className="btn btn-primary" href="https://rickandmortyapi.com/">
            ¡Check out the API!
          </a>
        </p>
      </Jumbotron>
    </div>
  );
}

export default Home;
