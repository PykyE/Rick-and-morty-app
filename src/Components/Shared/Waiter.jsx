import React from "react";

import styles from "Components/Shared/Waiter.module.css";

function Waiter() {
  return (
    <div className={`${styles.myWaiter} progress`}>
      <div
        className="progress-bar progress-bar-striped progress-bar-animated"
        role="progressbar"
        aria-valuenow="75"
        aria-valuemin="0"
        aria-valuemax="100"
        style={{ width: "75%" }}
      ></div>
    </div>
  );
}

export default Waiter;
