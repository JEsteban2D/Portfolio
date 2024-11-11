import React from "react";
import Tecnologies from "./Tecnologies";
import styles from "./Tecnologies.module.css";

const Tecnology = () => {
  return (
    <>
      <h2>Tecnologias</h2>
      <div className={styles.containerCards}>
        <Tecnologies />
        <Tecnologies />
        <Tecnologies />
        <Tecnologies />
        <Tecnologies />
        <Tecnologies />
        <Tecnologies />
        <Tecnologies />
      </div>
    </>
  );
};

export default Tecnology;
