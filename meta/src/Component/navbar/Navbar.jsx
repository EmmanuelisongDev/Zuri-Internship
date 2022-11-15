import React from 'react';
import { Link} from 'react-router-dom';
import logo from '../../assets/logo.png';
import { useState } from 'react';
import Overlay from '../../Pages/overlay/Overlay'
import './navbar.css'




const Navbar = () => {

    const [navbar, setNav] = useState(false);
    const [overlay, setOver] = useState(false);
    const toggleNav = () => {
        setNav(!navbar)
    }
    const showOverlay = () => {
        setOver(!overlay)
    }

    return ( 
        <div>
        <nav>
            <div className="logo">
            <img src={logo} alt="" />
            </div>
            <div className="link">
           <Link to='/'>Home</Link>
           <Link to='/places'>Place to stay</Link>
           <Link to='/'>NFTs</Link>
           <Link to='/'>Community</Link>
            </div>
    {navbar && (
        <div >
            <div className="link-mobile">
                 <svg 
                 onClick={toggleNav} 
                 class="w-8 h-8" 
                 fill="currentColor" 
                 viewBox="0 0 20 20" 
                 xmlns="http://www.w3.org/2000/svg">
                    <path 
                    fill-rule="evenodd" 
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" 
                    clip-rule="evenodd"></path></svg>
                 <div className='Link'>
                <Link to='/'>Home</Link>
                <Link to='/places'>Place to stay</Link>
                <Link to='/'>NFTs</Link>
                <Link to='/'>Community</Link>
                <button 
                onClick={showOverlay}  
                >Connect Wallet</button>
              </div>
            </div>
        </div>
    )}
            <div className="btn">
                <button 
                onClick={showOverlay}
                >Connect Wallet</button>
            </div>

            <svg 
            onClick={toggleNav} 
            class=" lg:hidden w-8 h-8" 
            fill="currentColor"
             viewBox="0 0 20 20" 
             xmlns="http://www.w3.org/2000/svg"><path 
             fill-rule="evenodd" 
             d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" 
             clip-rule="evenodd"></path></svg>

        </nav>
        {overlay && (
         <Overlay showOverlay = {showOverlay}/>
        )}
    </div>
    )
}
 
export default Navbar;



