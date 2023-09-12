import React from 'react'
import carbyneCyberLogo from '../../img/CarbyneCyberSolutions_RedLogoBlackFont.png'
import networkImg from "../../img/networkBackground.jpg"
import "./navbar.css"

const NavBar = () => {
  return (
    <div className='navbar'>
      <div className='wrapper'>
        <div className='left'>
          <a href="#home" >
            <img src={carbyneCyberLogo} alt="Carbyne Logo" className='carbyneLogo'/>
          </a>
        </div>
        <div className='right'>
          <ul className='navBarList'>
            <li className='navBarItem'>Services</li>
            <li className='navBarItem'>Leadership</li>
            <li className='navBarItem'>Partners</li>
            <li className='navBarItem'>Contact Us</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default NavBar