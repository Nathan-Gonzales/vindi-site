import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Navbar';
import Home from './Home';
import Guides from './guides';
import Lore from './lore';
import Community from './community';
import UsefulTools from './usefulTools';
import GearSimulator from './gearSimulator';
import FAQ from './faq';


function App() {
  return (
      <>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/guides' element={<Guides />} />
            <Route path='/lore' element={<Lore />} />
            <Route path='/community' element={<Community />} />
            <Route path='/usefulTools' element={<UsefulTools />} />
            <Route path='/gearSimulator' element={<GearSimulator />} />
            <Route path='/faq' element={<FAQ />} />
          </Routes>
        </Router>
      </>
  );
}

export default App;
