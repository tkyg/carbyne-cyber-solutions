import React from 'react'
import styled from "styled-components"
import NavBar from './NavBar'

const Container = styled.div`
  height: 100vh;
`

const App = () => {
  return (
    <Container>
      <NavBar />
    </Container>
  )
}

export default App
