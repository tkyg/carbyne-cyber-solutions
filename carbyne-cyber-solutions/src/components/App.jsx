import React from 'react'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import styled from "styled-components"
import NavBar from './navbar/NavBar'
import Footer from './footer/Footer'
import Home from './home/Home'
import Services from './services/Services'
import Partners from './partners/Partners'
import Leadership from './leadership/Leadership'
import Contact from './contact/Contact'
import './app.css'
// import Toggle from './toggle/Toggle'

// const Container = styled.div`
//   min-height: 100vh;
// `

// const App = () => {
//   return (
//     <>
//     <Router>
//       <NavBar />
//     <Toggle />
//     <Container>
//     <Routes>
//       <Route exact path="/" element={<Home />}/>
//       <Route exact path="/services" element={<Services />}/>
//       <Route exact path="/partners" element={<Partners />}/>
//       <Route exact path="/leadership" element={<Leadership />}/>
//       <Route exact path="/contact" element={<Contact />}/>
//     </Routes>
//     </Container>
//     <Footer />
// </Router>
//     </>
//   )
// }

// export default App


const App = () => {
  return (
    <div className='app'>
      <NavBar />
      <div className='sections'>
        <Home />
        <Services />
        <Partners />
        <Leadership />
        <Contact />
      </div>
    {/* <Footer /> */}
    </div>
  )
}

export default App