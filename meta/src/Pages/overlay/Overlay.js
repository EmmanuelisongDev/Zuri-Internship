import React from 'react';
import './overlay.css';
import metamask from '../../assets/metamask.png';
import walletconnect from '../../assets/walletconnect.png';





const Overlay = ({showOverlay}) => {
  
 

    return (
    
  

 
            <div className='overlay'>
            <div className='overlay-content'>
            <div className='heading'>
            <h1>Connect Wallet</h1>
            <svg  
           onClick={showOverlay}
            class="w-8 h-8" 
            fill="currentColor" 
            viewBox="0 0 20 20" 
            xmlns="http://www.w3.org/2000/svg"><path 
            fill-rule="evenodd" 
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </div>
            <p>Choose your preferred wallet:</p>
            
            <div className="logo-card">
            <div className="wrapper">
            <div className='ite'>
            <img src={metamask} alt="metamask" />
                    <h1>Metamask</h1>
                    </div>
                    <svg class="w-6 h-6 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                   
                </div>
                </div>
            <div className="logo-card">
            <div className="wrapper">
            <div className='ite'>
                     <img src={walletconnect} alt="walletconnect" />
                     <h1>Metamask</h1>
                    </div>
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                
                    </div>
            </div>
            </div>
            </div>
           
            )
        }
    export default Overlay;