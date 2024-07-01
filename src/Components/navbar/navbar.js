import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Logo from '../../assets/Logo.png';
import "./navbar.css";

const Navbar = () => {
   const [collapse, setCollapsed] = useState(true);

   return (
      <header className='header'>
         <img src={Logo} alt='' className='Logo' />
         <div className='Navbar'>
            <div className="header_Links">
               <Link to="/" className="N-home">Home</Link>
               <Link to="/services" className="N-companies">Services</Link>
               <Link to="/products" className="N-categories">Products</Link>
               <Link to="/About" className="N-about">AboutUs</Link>
               <Link to="/Contact" className="N-contact">ContactUs</Link>
               <Link to="/Login" className="N-Login">Login</Link>
            </div>
            <FontAwesomeIcon icon={collapse ? faBars : faXmark} className="header_icon" onClick={() => setCollapsed(!collapse)} />
         </div>
         {!collapse ?
            <nav className="header_mobile_nav">
               <div className="header_mobile_ul">
                  <Link to="/" className="N-home">Home</Link>
                  <Link to="/services" className="N-companies">Services</Link>
                  <Link to="/products" className="N-categories">Products</Link>
                  <Link to="/About" className="N-about">AboutUs</Link>
                  <Link to="/Contact" className="N-contact">ContactUs</Link>
                  <Link to="/Login" className="N-Login">Login</Link>
               </div>
            </nav>
            : null}
      </header>
   );
};

export default Navbar;
