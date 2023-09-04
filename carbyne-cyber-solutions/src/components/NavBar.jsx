import React from 'react'
import styled from 'styled-components'
import CarbyneCyberSolutionsLogo from "../img/Carbyne Cyber Solutions_Red Logo Black Font.png"
import { Link, useNavigate } from 'react-router-dom'

const Container = styled.div`
  height: 50px;
`
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: cover;
  justify-content: space-between;
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
            <MenuItem><Link to='/'>Home</Link></MenuItem>
            <MenuItem><Link to='/services'>Services</Link></MenuItem>
            <MenuItem><Link to='/partners'>Partners</Link></MenuItem>
            <MenuItem><Link to='/leadership'>Leadership</Link></MenuItem>
            <MenuItem><Link to='/contact'>Contact</Link></MenuItem>
          </Menu>
        </Right>

      </Wrapper>       
    </Container>
  )
}

export default NavBar