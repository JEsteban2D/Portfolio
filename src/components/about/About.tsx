import styles from "./About.module.css";
// import img from "./../../assets/images/anguila2.png";
import Thunder from "../thunder/Thunder";
const About = () => {
  return (
    <div className={styles.container}>
      <section className={styles.containerText}>
        <h1 className={styles.containerTitle}>NomBRE</h1>
        <p className={styles.containerParrafo}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
          dolore blanditiis error temporibus reprehenderit, tempora repellat,
          corporis numquam facere nesciunt optio velit id natus officia alias
          veniam, mollitia debitis. Facilis.
        </p>
      </section>
      <div className={styles.containerImage}>
        {/* <img className={styles.imageAnguila} src={img} alt="anguila" /> */}
        <Thunder/>
        <div className={styles.imageProfile}></div>
      </div>
    </div>
  );
};

export default About;
