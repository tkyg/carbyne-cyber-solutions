import React from 'react'
import styled from 'styled-components'
import CarbyneCyberSolutionsLogo from "../img/Carbyne Cyber Solutions_Red Logo Black Font.png"
import { Link, useNavigate } from 'react-router-dom'

const Container = styled.div`
  width: 100%;
  /* height: 50px; */
  position: sticky;
`
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: cover;
  justify-content: space-between;
  
  /* background-color: aqua; */
`

const Left = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Right = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* font-family: 'Open Sans', sans-serif; */
`

const Logo = styled.img`
  width: 170px;
  height: 60px;
  object-fit: scale-down;
`

const Menu = styled.ul`
  display: flex;
  list-style: none;
  
`;
const MenuItem = styled.li`
  margin-right: 30px;
  font-size: 20px;
  font-weight: bold;
  color: gray;
  
`;

const NavBar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo src={CarbyneCyberSolutionsLogo} alt="Carbyne Logo" />
        </Left>
        <Right>
        <Menu>
            <MenuItem><Link to='/' style={{textDecoration: 'none', color: 'gray'}}>Home</Link></MenuItem>
            <MenuItem><Link to='/services' style={{textDecoration: 'none', color: 'gray'}}>Services</Link></MenuItem>
            <MenuItem><Link to='/partners' style={{textDecoration: 'none', color: 'gray'}}>Partners</Link></MenuItem>
            <MenuItem><Link to='/leadership' style={{textDecoration: 'none', color: 'gray'}}>Leadership</Link></MenuItem>
            <MenuItem><Link to='/contact' style={{textDecoration: 'none', color: 'gray'}}>Contact</Link></MenuItem>
          </Menu>
        </Right>
      </Wrapper>       
    </Container>
  )
}

export default NavBar