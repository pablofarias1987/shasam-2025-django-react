
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
import style from '../Styles/Navbar.module.css';




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

// const authLinks = (
//   <>
//     <>
//     <div>
//       <button className="inline-flex justify-center w-full rounded-full  text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
//         <span className="inline-block h-10 w-10 rounded-full overflow-hidden bg-gray-100">
//           <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
//             <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
//           </svg>
//         </span>
//       </button>
//     </div>

//     <div 
//       as={Fragment}
//       enter="transition ease-out duration-100"
//       enterFrom="transform opacity-0 scale-95"
//       enterTo="transform opacity-100 scale-100"
//       leave="transition ease-in duration-75"
//       leaveFrom="transform opacity-100 scale-100"
//       leaveTo="transform opacity-0 scale-95"
//     />
//       <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
//         <div className="py-1">
//           <div>
//             {({ active }) => (
//               <Link
//                 to="/dashboard"
//                 className={classNames(
//                   active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
//                   'block px-4 py-2 text-sm'
//                 )}
//               >
//                 Dashboard
//               </Link>
//             )}
//           </div>
          
          
//           <form method="POST" action="#">
//             <div>
//               {({ active }) => (
//                 <button
//                   onClick={logoutHandler}
//                   className={classNames(
//                     active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
//                     'block w-full text-left px-4 py-2 text-sm'
//                   )}
//                 >
//                   Sign out
//                 </button>
//               )}
//             </div>
//           </form>
//         </div>
//       </div>
//     </>
//   </>

    return (    
      <>
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
            {isAuthenticated?
            <p></p>:<Link to="/login"><button  className={style.button2} >Iniciar de sesion</button></Link>}
            {isAuthenticated?
            <p></p>:<Link to="/signup"> <button  className={style.button1} >Registrarse</button></Link>}
            {isAuthenticated?<Link to="/dashboard"
              
             ><button  className={style.button2}>
               Mi cuenta</button>
             </Link>:
             <a
             href=""
             className=""
           >
             
           </a>}

           {isAuthenticated?<button  className={style.button1} onClick={logoutHandler} >Cerrar sesion</button>:
             <a></a>}
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
   <Alert/>
</>
  );

  
}
  const mapStateToProps = state => ({
    isAuthenticated: state.Auth.isAuthenticated,
    user: state.Auth.user

  })

  export default connect(mapStateToProps,{
    logout
  }) (Navbar2)