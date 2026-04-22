import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CompNavbar from './components/CompNavbar';
import Banner from './components/Banner';
import Skills from './components/Skills';
import { Projects } from './components/Projects';
function App() {
  return (
    <div className="App">
     <CompNavbar></CompNavbar>
     <Banner></Banner>
    <Skills></Skills>
    <Projects></Projects>
    </div>
  );
}

export default App;
