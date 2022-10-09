import './App.css';
import { Navbar } from './components/navbar/Navbar';
import { Me } from './components/me/Me';
import { AboutMe } from './components/aboutMe/AboutMe';
import { Experience } from './components/experience/Experience';

function App() {
  return (
    <div>
      <Navbar/>
      <div className='body'>
        <Me/>
        <AboutMe/>
        <Experience/>
      </div>
    </div>
  );
}

export default App;
