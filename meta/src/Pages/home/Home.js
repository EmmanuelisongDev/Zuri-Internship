import React from 'react';
import './home.css';
import heroimg from '../../assets/hero-img.png';
import logo1 from '../../assets/logo1.png'
import logo2 from '../../assets/logo2.png'
import logo3 from '../../assets/logo3.png'
import Card from '../../Component/card/Card'
import mix from '../../assets/mixed.png'








const Home = () => {
    return ( 
        <div className='home'>
            <div className='hero'>
                <div className='hero1'>
                    <h1>Rent a <span>Place</span> away from <span>Home </span> in the <span>Metaverse</span></h1>
                    <p>we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>
                    <div className="search-bar">
                        <input 
                        type="search" 
                        name="" 
                        placeholder='Search for location' 
                        id="" />
         
                        <button>Search</button>
                    </div>
                </div>
                <div className='hero2'>
            <img 
            src={heroimg} 
            alt="homes" />
                </div>
            </div>


            <div className="logos">
                <div className='logo'>
                <img src={logo1} alt="l1" />
              
                </div>
                <div className='logo'>
                <img  src={logo2} alt="l2" />
                
                </div>
                <div className='logo'>
                <img src={logo3} alt="l3" />
              
                </div>
            </div>

            <div className="product-h">
                <div className="header">
                    <h1>Inspiration for your next adventure</h1>
                </div>
                    <Card/>

                
            </div>

            <div className="mix">
                <div className="mix-text">
                    <h1>Metabnb NFTs</h1>
                    <p>Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.</p>
                    <button>Learn more</button>

                </div>
                <div className="mix-img">
                    <img src={mix} alt="" />
                </div>
            </div>
        </div>
     );
}
 
export default Home;