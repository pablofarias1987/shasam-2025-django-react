
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
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import LOGO_LETRAS_SHASAM_PNG from '../../image/LOGO_LETRAS_SHASAM_PNG.png';
import style from '../Styles/Navar.module.css';

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
        <Navbar.Brand href="/home"><Col xs={6} md={4}><Image src={LOGO_LETRAS_SHASAM_PNG}  /></Col></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Inicio</Nav.Link>
            <Nav.Link href="/about">Quiénes somos</Nav.Link>
            <Nav.Link href="/programs">Programas</Nav.Link>
            <Nav.Link href="/treatments">Tratamientos</Nav.Link>
            </Nav>
            <Nav>
            <Link to="/signup"> <button  className={style.button1} >Registrarse</button></Link>
            <Link to="/login"><button  className={style.button2} >Iniciar de sesion</button></Link>
            {/* <NavDropdown title="Cuenta" id="basic-nav-dropdown">
              <NavDropdown.Item href="/login">Iniciar de sesion</NavDropdown.Item>
              <NavDropdown.Item href="/signup">
                Registrarse
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                hola
              </NavDropdown.Item>
              </NavDropdown> */}
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