import './index.scss'
import {  NavLink } from 'react-router-dom'
import logo from '../../assets/images/transparent.png'
import { faHome, faInfoCircle, faUser, faUserPlus, faFire, faDollarSign, faHouseChimneyWindow, faQuestion} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const Navbarr = () => {
  return (
    <>
   <nav className="navbar">
   <img src={logo} alt="placholder" className="logo" />
            <NavLink exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon icon={faHome} color="#000000"/>
                Home
            </NavLink>
            <NavLink exact="true" activeclassname="active"  className="about-link"  to="/about">
            <FontAwesomeIcon icon={faInfoCircle} color="#000000"/>
            About Us
                
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="featured-link" to="/featured">
            <FontAwesomeIcon icon={faFire} color="#000000"/>
                Featured
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="quote-link" to="/quote">
            <FontAwesomeIcon icon={faDollarSign} color="#000000"/>
               Request Quote
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="window-link" to="/resume">
            <FontAwesomeIcon icon={faHouseChimneyWindow} color="#000000"/>
               Window Screens
            </NavLink>
          
           
           
           
              <NavLink exact="true" activeclassname="active" className="login-link" to="/resume">
              <FontAwesomeIcon icon={faUser} color="#000000"/>
              Login
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="create-link" to="/resume">
            <FontAwesomeIcon icon={faUserPlus} color="#000000"/>
              Sign Up for Free
            </NavLink>
            
           
          
   </nav>

  
  </>
  );
}
export default Navbarr