import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import styled from "styled-components"
import NavBar from './NavBar'
import Footer from './Footer'
import Home from './Home'
import Services from './Services'
import Partners from './Partners'
import Leadership from './Leadership'
import Contact from './Contact'

const Container = styled.div`
  height: 100vh;
`

const App = () => {
  return (
    <Router>
    <Container>
      <NavBar />
    </Container>
    <Routes>
      <Route exact path="/" element={<Home />}/>
      <Route exact path="/services" element={<Services />}/>
      <Route exact path="/partners" element={<Partners />}/>
      <Route exact path="/leadership" element={<Leadership />}/>
      <Route exact path="/contact" element={<Contact />}/>
    </Routes>
    <Footer />
    </Router>
  )
}

export default App
