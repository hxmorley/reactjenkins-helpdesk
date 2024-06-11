import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from './Components/Navbar'
import HomePage from './Pages/Homepage'
import About from './Pages/Aboutpage'
import Contact from './Pages/Contactpage'
import Faq from './Pages/Faqpage'
import Tickets from './Pages/Ticketspage'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Aboutpage" element={<About />} />
          <Route path="/Contactpage" element={<Contact />} />
          <Route path="/Faqpage" element={<Faq />} />
          <Route path="/Tickets" element={<Tickets />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
