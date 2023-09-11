import React from 'react'
import './home.css'
import carbyneLogo from '../../img/CarbyneCyberSolutions_RedLogoBlackFont.png'

const Home = () => {
  return (
    <div className='home' id="home">
      <div className='left'>
        <div className='imgContainer'>
          <img src={carbyneLogo} alt='carbyneLogo' />
          <div>Protecting Your Future</div>
        </div>
      </div>
      <div className='right'>This is Our Mission Statement</div>
    </div>
  )
}

export default Home