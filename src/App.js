import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route, Switch} from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Footer from './components/Footer';
import MobileMenu from './components/MobileMenu';
import { useState } from 'react';
import About from './pages/About';


function App() {
  const [isOpen, setIsOpen]= useState(false)

  const handleMenu =()=>{
    setIsOpen((isOpen)=> !isOpen)
  }

  return (
    <div className="App">
      <Router>
        <Navbar handleMenu={handleMenu}/>
        {isOpen && <MobileMenu handleMenu={handleMenu} />}
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
        <Footer/>
      </Router>
     
    </div>
  );
}

export default App;
