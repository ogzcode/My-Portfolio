import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="container-fluid p-0 m-0">
      <NavBar />
      <Home />
      <Portfolio />
      <About />
      <Contact/>
    </div>
  );
}
export default App;
