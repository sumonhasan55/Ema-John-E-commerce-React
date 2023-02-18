import React from 'react';
import Logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    return (
        <div>

            <nav className='navbar'>
                <img src={Logo} alt="" />
                <div className="menu">
                    <a href="/home">Home</a>
                    <a href="/about">About</a>
                    <a href="/orders">Orders</a>
                    <a href="/inventory">Inventory</a>
                </div>

            </nav>

        </div>

    )
}

export default Header;