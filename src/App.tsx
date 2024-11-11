import styles from "./App.module.css";
import About from "./components/about/About";
import Rain from "./components/rain/Rain.tsx";
import Tecnology from "./components/tecnologies/Layout.tsx";
import Tecnologies from "./components/tecnologies/Tecnologies.tsx";
import Thunder from "./components/thunder/Thunder.tsx";
import Wave from "./components/wave/Wave";

function App() {
  return (
    <div className={styles.fullLandingImage}>
      <Rain />
      <Wave />
      <About />
      <Tecnology/>
      {/* <About/>
      
      <Thunder/> */}
      <h2>Experiencia</h2>
      <h2>Proyectos</h2>
    </div>
  );
}

export default App;
