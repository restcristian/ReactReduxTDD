import React from 'react';
import './styles.scss';
import Logo from '../../assets/graphics/logo.png';

const Header = props => {
    return (
       <header className = "header-component" data-test = "header-component">
           <div className="wrap">
               <div className="logo">
                  <img src = {Logo} alt = "Logo" className = "logo-image" data-test = "logo-image"/>
               </div>
           </div>
       </header>
    );
};

export default Header;