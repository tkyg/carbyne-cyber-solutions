import React from 'react'
import './partners.css'

const Partners = () => {
  return (
    <div className='partners' id='partners'>
      <div className="slider">
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <img src="" alt="" />
                </div>
                <h2 style={{fontSize:"20px;", fontFamily: "Barlow"}}>Jason Wiele</h2>
                <p style={{fontSize:"13px;", fontFamily: "Barlow"}}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                <span style={{fontSize:"12px;", fontFamily: "Barlow"}}>Projects</span>
              </div>
            </div>
            <div className="right">
            <div className="imgContainer">
                  <img src="https://pbs.twimg.com/profile_images/2436680846/112j1z9mmsn94e48q16i_400x400.jpeg" alt="JasonImg" />
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Partners