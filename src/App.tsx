import styles from "./App.module.css";
import About from "./components/about/About";
import Rain from "./components/rain/Rain.tsx";
import Thunder from "./components/thunder/Thunder.tsx";
import Wave from "./components/wave/Wave";

function App() {
  return (
    <div className={styles.fullLandingImage}>
      <Rain />
      <Wave />
      <About />
      {/* <About />

      <Thunder /> */}
    </div>
  );
}

export default App;
