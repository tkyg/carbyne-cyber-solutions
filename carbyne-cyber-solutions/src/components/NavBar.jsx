import React from 'react'
import styled from 'styled-components'
import CarbyneCyberSolutionsBlack from "../public/Carbyne Cyber Solutions_Black.jpeg"

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
          <Logo src={CarbyneCyberSolutionsBlack} alt="Carbyne Logo" />
        </Left>
        <Right>
        <Menu>
            <MenuItem>Home</MenuItem>
            <MenuItem>Services</MenuItem>
            <MenuItem>Partners</MenuItem>
            <MenuItem>Leadership</MenuItem>
            <MenuItem>Contact</MenuItem>
          </Menu>
        </Right>

      </Wrapper>       
    </Container>
  )
}

export default NavBar