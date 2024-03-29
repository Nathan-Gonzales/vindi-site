import {FiMenu} from 'react-icons/fi';
import {AiFillCloseSquare} from 'react-icons/ai';
import imgIcon from './images/V.jpg';
import { Link } from "react-router-dom";
import React, {useState} from 'react';

const Navbar = () => {

    const [show,setShow] = useState(false)

    return(
        <header className='bg-neutral-900 sticky top-0'>
            <div className=''>
                <nav className=' md:flex md:justify-between md:items-center px-5 text-neutral-200 text-xl font-red-rose'>
                    <div className='flex justify-between items-center'>
                        <span>
                            <Link to='/' onClick={() => setShow(false)}><div className='pt-5 pb-5 pl-5 md:p-0'><img className='cursor-pointer w-10 h-10' src={imgIcon} alt=''/></div></Link> {/* Create Vindiversity Icon in Canva */}
                        </span>
                        <span className='text-3xl px-5 pb-5 pt-5 cursor-pointer md:hidden block'>
                            {
                            show? <AiFillCloseSquare onClick={() => setShow(false)} /> : <FiMenu onClick={() => setShow(true)} />
                            }
                        </span>
                    </div>
                    
                    <ul className={show ? 'md:flex md:flex-row md:items-center z-[-1] md:z-auto md:static bg-neutral-900 w-1/2 md:w-auto' : 'md:flex md:flex-row md:items-center z-[-1] md:z-auto md:static bg-neutral-900 w-1/2 md:w-auto fixed left-[-100%]'}>
                        <Link to='/guides' onClick={() => setShow(false)}><li className='p-5'>Guides</li></Link>
                        {/* <Link to='/lore'><li className='p-5'>Lore</li></Link> */}
                        <Link to='/community' onClick={() => setShow(false)}><li className='p-5'>Community</li></Link>
                        {/* <Link to='/usefulTools'><li className='p-5'>Useful Tools</li></Link> */}
                        <Link to='/gearSimulator' onClick={() => setShow(false)}><li className='p-5'>Gear Simulator</li></Link>
                        {/* <Link to='/faq'><li className='p-5'>FAQ</li></Link> */}
                    </ul>
                    <div></div>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;