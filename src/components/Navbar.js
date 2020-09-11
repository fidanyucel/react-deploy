import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import {Button} from './Button';

function Navbar() {
    const [click,setClick] =useState(false);
    const [button, setButton]= useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        } else{
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    } , []);

    window.addEventListener('resize', showButton);

    return (
      <>
      <nav className='navbar'>
          <div className='navbar-container'>
           <Link to ='/react-website'   className='navbar-logo' onClick ={closeMobileMenu}>
               TRVL <i className='fab fa-typo3' />
           </Link>
           <div className='menu-icon' onClick={handleClick}>
               <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
           </div>
           <ul className={click ? 'nav-menu active' : 'nav-menu'}>
               <li className='nav-item'>
                   <Link
                    to='/react-website' 
                    className='nav-links'
                     onClick={closeMobileMenu}>
                      AnaSayfa
                   </Link>
               </li>
               <li className='nav-item'>
                   <Link 
                   to='/react-website/services' 
                   className='nav-links' 
                   onClick={closeMobileMenu}>
                       Ayarlar
                   </Link>
               </li>
               <li className='nav-item'>
                   <Link
                    to='/react-website/products'
                     className='nav-links'
                      onClick={closeMobileMenu}>
                       Yapım
                   </Link>
               </li>
               <li className='nav-item'>
                   <Link 
                   to='/react-website/sign-up'
                    className='nav-links-mobile'
                     onClick={closeMobileMenu}>
                      GİRİŞ
                   </Link>
               </li>
           </ul>
           {button && <Button buttonStyle='btn--outline'>GİRİŞ</Button>}
          </div>
      </nav>
      </>
    );
}

export default Navbar;
