import Nav from './components/Nav';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Project from './components/Project';

function App() {
  return (
    <div>
      <Nav />
      <Home />
      <About />
      <Skills />
      <Project />
    </div>
  );
}

export default App;
