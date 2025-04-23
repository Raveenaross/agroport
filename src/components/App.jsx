import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Services from './components/Services/Services';
import './App.css';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/services' element={<Services />}></Route>
        </Routes>
      </Router>
    </>
  )
}
export default App;
