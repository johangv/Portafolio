import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//Components
import NavBar from "./components/navBar/index";
import AboutMe from "./components/aboutMe/index";
import Resume from "./components/resume/index";
import Proyects from "./components/proyects/index";
import ContactMe from './components/contactMe/index';

function App() {
  return <div>
    <NavBar/>
    <AboutMe/>
    <Resume/>
    <Proyects/>
    <ContactMe/>
  </div> 
}

export default App;
