import React from 'react'
import './home.css'
import carbyneLogo from '../../img/CarbyneCyberSolutions_RedLogoBlackFont.png'

const Home = () => {
  return (
    <div className='home' id="home">
      <div className='left'>
        <div className='imgContainer'>
          <img src={carbyneLogo} alt='carbyneLogo' />
        </div>
      </div>
      <div className='right'>
        <div className='wrapper'>
          <h2 id="mission">This Is Our Mission Statement</h2>
          <h3 id='tag'>This is what we do</h3>
        </div>
      </div>
    </div>
  )
}

export default Home