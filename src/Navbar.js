import {CgProfile} from 'react-icons/cg';
import imgIcon from './images/V.jpg';
import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <header className='bg-neutral-900 sticky top-0'>
            <div className=' flex justify-between items-center px-5'>
                <Link to='/'><div className='flex '><img className='cursor-pointer w-10 h-10' src={imgIcon} alt=''/></div></Link> {/* Create Vindiversity Icon in Canva */}
                <div className=''>
                    <nav className='bg-transparent text-neutral-200 text-xl font-red-rose'>
                        <ul className='flex flex-row '>
                        <Link to='/guides'><li className='p-5'>Guides</li></Link> {/*Raid guides, Character guides, General guides*/}
                        <Link to='/lore'><li className='p-5'>Lore</li></Link>
                        <Link to='/community'><li className='p-5'>Community</li></Link>
                        <Link to='/usefulTools'><li className='p-5'>Useful Tools</li></Link>
                        <Link to='/gearSimulator'><li className='p-5'>Gear Simulator</li></Link>
                        <Link to='/faq'><li className='p-5'>FAQ</li></Link>
                        </ul>
                    </nav>
                </div>
                <div><CgProfile className='cursor-pointer text-blue-200 text-4xl'/></div> {/* Find better icon for profile */}
            </div>
        </header>
    );
}

export default Navbar;