import {CgProfile} from 'react-icons/cg';
import imgIcon from './images/V.jpg';
import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <header className='bg-neutral-900 sticky top-0'>
            <div className='p-5 flex justify-between items-center'>
                <div className='flex '><img className='cursor-pointer w-8 h-8' src={imgIcon} alt=''/></div> {/* Create Vindiversity Icon in Canva */}
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
                <div><CgProfile className='cursor-pointer text-blue-200 text-4xl'/></div> {/* Find better icon for profile */}
            </div>
        </header>
    );
}

export default Navbar;