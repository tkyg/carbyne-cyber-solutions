import React, { useRef } from 'react'
import styled from 'styled-components'
import { SocialIcon } from 'react-social-icons'


const Container = styled.div`
  height: 100vh;
  position: relative;
`
// const Wrapper = styled.div`
//   width: 20px;
//   height: 100%;
//   background-color: aquamarine;
//   position: absolute;
// `

const Main = styled.div`
  padding: 50px;
  display: flex;
`

const Right = styled.div`
  flex: 1;  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Title = styled.h1`
  font-size: 60px;
  width: 80%;
  
`

const Description = styled.p`
  font-weight: 200;
  font-size: 60px;
  width: 80%
`

const Message = styled.textarea`
  width: 100%
`

const Button = styled.button`
  border: none;
  padding: 15px;
  background-color: teal;
  color: white;
  font-weight: 500;
  cursor: pointer;
`

const Contact = () => {
  const formRef = useRef()

  const handleSubmit = (e) =>{
    e.preventDefault()
    
  }

  return (
    <Container>
        <Main>
          <Right>
            <Description>
              Contact Us
            </Description>
            <form ref={formRef} onSubmit={handleSubmit}>
              <input type="text" placeholder='Name' name="user_name" />
              <input type="text" placeholder='Subject' name="user_subject" />
              <input type="text" placeholder='Email' name="user_email" />
              <Message rows="5" placeholder='Message' name="message" />
              <Button>Submit</Button>
            </form>
          </Right>
        </Main>

    </Container>
  )
}

export default Contact