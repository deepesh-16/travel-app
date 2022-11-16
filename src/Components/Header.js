import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../Images/logo.png'

function Header() {
  return (
    <div className="bg-grey-50 ">
        <Navbar collapseOnSelect expand="lg">
      <Container>
        <Nav className="mx-auto">
            <img  style={{height:"4rem"}}src={logo} alt="" />
        </Nav>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className='ml-auto'>
            <Nav.Link href="#deets">
            <div className="text-red-500  hover:text-red-50 border-red-500 border-2 rounded-full p-2 hover:bg-red-500 ease-out duration-500">
                    Contact-Us
                </div>
            </Nav.Link>
            <Nav.Link  href="#memes" >
                <div className="text-red-500  hover:text-red-50 border-red-500 border-2 rounded-full p-2 hover:bg-red-500 ease-out duration-500">
                    Login
                </div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header