import './App.css';
import { Navbar } from './components/navbar/Navbar';
import { Me } from './components/me/Me';
import { AboutMe } from './components/aboutMe/AboutMe';
import { Experience } from './components/experience/Experience';
import Works from './components/works/Works';

function App() {
  return (
    <div>
      <Navbar/>
      <div className='body'>
        <Me/>
        <AboutMe/>
        <Experience/>
        <Works/>
      </div>
    </div>
  );
}

export default App;
