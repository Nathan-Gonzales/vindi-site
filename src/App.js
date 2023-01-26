import './App.css';
import {  BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {CgProfile} from 'react-icons/cg';
import imgBanner from './images/Goddess_Morrighan.jpg';
import imgIcon from './images/V.jpg';
import Guides from './guides';
import Lore from './lore';
import Community from './community';
import UsefulTools from './usefulTools';
import GearSimulator from './gearSimulator';
import FAQ from './faq';
// import {useState} from 'react';

function App() {
  // const [darkMode, setDarkMode] = useState(false);
  return (
    <Router>
      <div>
        <main className='bg-[url("./images/Earthborn.png")] bg-fixed'>
          <section className='min-h-screen'>
            <header className='bg-neutral-900 sticky top-0'>
              <div className='p-5 flex justify-between items-center'>
                <div className='flex '><img className='cursor-pointer w-10 h-10' src={imgIcon} alt=''/></div>
                <div className=''>
                  <nav className='bg-transparent text-neutral-200 text-xl font-red-rose'>
                    <ul className='flex flex-row'>
                      <li className='px-5'><Link to='/guides'>Guides</Link></li> {/*Raid guides, Character guides, General guides*/}
                      <li className='px-5'><Link to='/lore'>Lore</Link></li>
                      <li className='px-5'><Link to='/community'>Community</Link></li>
                      <li className='px-5'><Link to='/usefulTools'>Useful Tools</Link></li>
                      <li className='px-5'><Link to='/gearSimulator'>Gear Simulator</Link></li>
                      <li className='px-5'><Link to='/faq'>FAQ</Link></li>
                    </ul>
                  </nav>
                </div>
                <div><CgProfile className='cursor-pointer text-blue-200 text-4xl'/></div>
              </div>
            </header>
            <section className='flex items-center justify-center'>
              <div className='bg-neutral-900/[.75] flex flex-col h-screen justify-start max-w-screen-xl px-3 border-neutral-900 border-2'>
                <img className='border-neutral-900 border-2 mb-5' src={imgBanner} alt="" />
                <div className='flex flex-col items-center'>
                  <h1 className='bg-gradient-to-b from-black/[.65] to-neutral-900/[.65] font-red-rose py-10 w-4/5 text-center text-neutral-200 text-5xl  rounded-sm'>
                    Vindictus University</h1>
                  <p className='bg-gradient-to-b from-black to-neutral-900 font-red-rose p-10 w-full text-center text-neutral-200 text-3xl  rounded-sm my-5 border-neutral-900 border-2'>
                    Welcome mercenaries, to our own little pocket of Erinn. In this place outside of time you can learn 
                    how to change your fate with the knowledge of others who have walked this path before you. 
                  </p>
                </div>
              </div>
            </section>
          </section>
        </main>
        <Routes>
          <Route path='/guides' element={<Guides />} />
          <Route path='/lore' element={<Lore />} />
          <Route path='/community' element={<Community />} />
          <Route path='/usefulTools' element={<UsefulTools />} />
          <Route path='/gearSimulator' element={<GearSimulator />} />
          <Route path='/faq' element={<FAQ />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
