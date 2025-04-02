import React from 'react'
import Logo from '../../assets/logo.png'
import './Header.css'
const Header = () => {
  return (
    <div className="header">
        <nav>
            <div className="img">
                <img src={Logo} alt=""/>
            </div>
            <div className="list">
                <ul>
                    <li>PORTFOLIO</li>
                    <li>TEAM</li>
                    <li>FEATURES</li>
                    <li>SERVICES</li>
                    <li>PRICING</li>
                    <li>TABLE</li>
                    <li>BLOG</li>
                    <li>CONTACT</li>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Header