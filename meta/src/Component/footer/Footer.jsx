import React from 'react';
import './footer.css'
import logobw from '../../assets/logobw.png'
import insta from '../../assets/instagram.png'
import face from '../../assets/face.png'
import twitter from '../../assets/twitter.png'

const Footer = () => {
    return ( 
        <footer>

        <div className='footer'>
            <div className='logo2 pb-10'>
                <img src={logobw} alt="" />
            </div>
       <div className='item'>

            <div className="item-1">
                <h1>Commuity</h1>
                
                    <p>NFT</p>
                    <p>Tokens</p>
                    <p>Landlords</p>
                    <p>Discord</p>
            
            </div>
        
    
            <div className="item-1">
                <h1>Places</h1>
                
                    <p>Castle</p>
                    <p>Farms </p>
                    <p>Beach</p>
                    <p>Learn more</p>
                
            </div>
        
       
            <div className="item-1">
                <h1>About us</h1>
                
                    <p>Road map</p>
                    <p>Creators </p>
                    <p>Career</p>
                    <p>Contact us</p>
               
            </div>
       </div>
       
        
        </div>

        <div className='others flex flex-col space-y-10 justify-center lg:mx-32 mx-5 mt-10'>
            <div className='icons flex space-x-6'>
                <img src={face} alt="" />
                <img src={insta} alt="" />
                <img src={twitter} alt="" />
            </div>

            <div className='copyright'>
                <p> &copy; 2022 Metabnb</p>
            </div>
        </div>
        </footer>
     );
}
 
export default Footer;