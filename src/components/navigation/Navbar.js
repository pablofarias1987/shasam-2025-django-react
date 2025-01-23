import '../../styles/Navbar.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { logout } from '../../redux/actions/auth'
import { Fragment, useEffect, useState } from 'react'
import { Navigate } from 'react-router'
import Alert from '../../components/alert'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


function Navbar2 ({
  isAuthenticated,
  user,
  logout

}) {

  const [redirect, setRedirect] = useState(false);

const [render, setRender] = useState(false);
const logoutHandler = () => {
  logout()
  setRedirect(true);
}

    return (    
    <Navbar expand="lg" bg="primary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">SHASAM</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#link">Programas</Nav.Link>
            <NavDropdown title="Cuenta" id="basic-nav-dropdown">
              <NavDropdown.Item href="/login">Singin</NavDropdown.Item>
              <NavDropdown.Item href="/signup">
                Signup
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
 
              </NavDropdown.Item>
         
            </NavDropdown></Nav>
            <Nav>
            <Nav.Link href="/login">Singin</Nav.Link>
            <Nav.Link  href="/signup">Signup</Nav.Link>
          </Nav>
          
        </Navbar.Collapse>

      </Container>
   

    </Navbar>
  );


<Alert/>
      
  
}
  const mapStateToProps = state => ({
    isAuthenticated: state.Auth.isAuthenticated,
    user: state.Auth.user

  })

  export default connect(mapStateToProps,{
    logout
  }) (Navbar2)