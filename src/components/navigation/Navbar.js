import '../../styles/Navbar.css';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
      <nav className="navbar">
        <div className="navbar-logo">SHASAM</div>
        <ul className="navbar-links">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/footer">footer</Link></li>
        </ul>
      </nav>
    );
  };
  
  export default Navbar;
