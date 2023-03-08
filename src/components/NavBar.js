import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export const NavBar = () => {
  return (
    <div>
      <Navbar bg="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              src="logo512.png"
              width="30"
              height="30"
              className="d-flex justify-content-center"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
      <br />
      
    </div>
  )
}
