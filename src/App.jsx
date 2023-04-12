import './App.css';
import Header from './components/Header';
import Contact from './components/Contact';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <Header/>
     <Outlet/>
     <Contact/>
    </div>
  )
}

export default App
