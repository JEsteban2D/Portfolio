import styles from "./Wave.module.css";

const Wave = () => {
  return (
    <div className={styles.containerWave}>
      <div className={styles.wave}></div>
      <div className={`${styles.wave} ${styles.wave2}`}></div>
      <div className={`${styles.wave} ${styles.wave3}`}></div>
    </div>
  );
};

export default Wave;
