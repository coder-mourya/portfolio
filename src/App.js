import './App.css';
import { Route, Routes } from 'react-router-dom';
import Nav from './components/Navbar';
import Home from './pages/Home';
import About from './components/About';
import Work from './components/Work';
import Tech from './components/Tech';
import Demo from './components/Demo';
import Projects from './components/Projects';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import Contact from './components/Contact';

function App() {
  return (
    <>

      <Nav />

      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/work' element={<Work />} />
        <Route exact path='/tech' element={<Tech />} />
        <Route exact path='/projects' element={<Projects />} />
        <Route exact path='/demo' element={<Demo />} />
        <Route exact path='/pricing' element={<Pricing />} />
        <Route exact path='/contact' element={<Contact />} />
        
      </Routes>

      <Footer />

    </>
  );
}

export default App;
