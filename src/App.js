import './App.css';
// import {BsFillMoonStarsFill} from 'react-icons/bs';
import {CgProfile} from 'react-icons/cg';
import imgBanner from './images/new_Vindiversity.JPG';
import imgIcon from './images/V.jpg';
// import {useState} from 'react';

function App() {
  // const [darkMode, setDarkMode] = useState(false);
  return (
    <div>
      <main className='bg-[url("./images/Earthborn.png")] bg-fixed'>
        <section className='min-h-screen'>
          <header className='bg-neutral-900 sticky top-0'>
            <div className='p-5 flex justify-between items-center'>
              <div className='flex '><img className='cursor-pointer text-neutral-200 w-10 h-10' src={imgIcon} alt=''/></div>
              <div className=''>
                <nav className='bg-transparent text-neutral-200 text-xl font-red-rose'>
                  <ul className='flex flex-row'>
                    <li className='px-5'>Guides</li> {/*Raid guides, Character guides, General guides*/}
                    <li className='px-5'>Community</li>
                    <li className='px-5'>Useful Tools</li>
                    <li className='px-5'>Gear Simulator</li>
                    <li className='px-5'>FAQ</li>
                  </ul>
                </nav>
              </div>
              <div><CgProfile className='cursor-pointer text-neutral-200 text-4xl'/></div>
            </div>
          </header>
          <section className='flex items-center justify-center'>
            <div className='bg-neutral-900/[.75] flex flex-col justify-center max-w-screen-xl px-10'>
              <img className='' src={imgBanner} alt="" />
              <div className='flex flex-col items-center'>
                {/* <h1 className='bg-gradient-to-b from-black/[.65] to-neutral-900/[.65] font-red-rose py-10 w-4/5 text-center text-neutral-200 text-5xl my-10 rounded-sm'>
                  Vindictus University</h1> */}
                <p className='bg-gradient-to-b from-black to-neutral-900 font-red-rose p-10 w-full text-center text-neutral-200 text-3xl  rounded-sm my-10'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit dolorem animi asperiores. 
                  Et facere necessitatibus obcaecati rerum cumque accusamus praesentium? Nemo, quaerat 
                  dolor animi porro obcaecati expedita ratione quasi vero!
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit dolorem animi asperiores. 
                  Et facere necessitatibus obcaecati rerum cumque accusamus praesentium? Nemo, quaerat 
                  dolor animi porro obcaecati expedita ratione quasi vero!
                </p>
              </div>
            </div>
          </section>
        </section>
      </main>
    </div>
  );
}

export default App;
