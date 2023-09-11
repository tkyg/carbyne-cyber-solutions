// import React from 'react'

// const Footer = () => {
//   return (
//     <div style={{backgroundColor: 'dimgray'}}>Footer</div>
//   )
// }

// export default Footer
import React from 'react'
import { SocialIcon } from 'react-social-icons';


const Footer = () => {
  return (
    <div>
      <div style={{display: "flex", height: "50px", marginBottom: "-50px"}}>
        <div style={{ "fontFamily": "Mukta", width: "50%", float: "left"}}>
        {/* <h5>Carbyne Cyber Security</h5> */}
      </div>
      <div style={{width: "50%", float: "right"}}></div>
        <SocialIcon url="https://twitter.com" 
          style={{
            width: "1em", 
            margin: ".2em", 
            padding: ".2em"
          }} 
        />
        <SocialIcon url="https://facebook.com" 
          style={{
            width: "1em", 
            margin: ".2em", 
            padding: ".2em"
          }} 
        />
        <SocialIcon url="https://instagram.com" 
          style={{
            width: "1em", 
            margin: ".2em", 
            padding: ".2em"
          }} 
        />
      </div>
    </div>
  )
}

export default Footer