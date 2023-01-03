import './index.scss'
import {  NavLink } from 'react-router-dom'
import logo from '../../assets/images/transparent.png'


const Navbarr = () => {
  return (
    <>
   <nav className="navbar">
   <img src={logo} alt="placholder" className="logo" />
    <NavLink exact="true" activeclassname="active" to="/">
 
                Home
            </NavLink>
            <NavLink exact="true" activeclassname="active"  className="about-link"  to="/about">
            About Us
                
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="featured-link" to="/featured">
                Featured
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="quote-link" to="/resume">
               Request Quote
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="window-link" to="/resume">
               Window Screens
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="faq-link" to="/resume">
               FAQ
            </NavLink>
           
           
           
              <NavLink exact="true" activeclassname="active" className="login-link" to="/resume">
              Login
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="create-link" to="/resume">
              Sign Up for Free
            </NavLink>
            
           
          
   </nav>

  
  </>
  );
}
export default Navbarr