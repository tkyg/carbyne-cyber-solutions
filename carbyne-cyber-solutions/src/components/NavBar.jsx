import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height: 50px;
`
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
`

const Left = styled.div`
  width: 60%;
`

const Logo = styled.h1`
  font-weight: bold;
  text-decoration: underline crimson;
`

const Menu = styled.ul``;
const MenuItem = styled.li``;

const NavBar = () => {
  return (
    <Container>
      <Wrapper>
        <span>
          <Logo>Carbyne Cyber Solutions</Logo>
          <Menu>
            <MenuItem>Home</MenuItem>
            <MenuItem>Services</MenuItem>
            <MenuItem>Contact</MenuItem>
            <MenuItem>Partners</MenuItem>
            <MenuItem>Leadership</MenuItem>
          </Menu>
        </span>
        <span>button</span>

      </Wrapper>       
    </Container>
  )
}

export default NavBar