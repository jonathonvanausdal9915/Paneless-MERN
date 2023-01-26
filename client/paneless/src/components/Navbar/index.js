import './index.scss'
import {  NavLink,} from 'react-router-dom'
import logo from '../../assets/images/transparent.png'
import { faHome, faInfoCircle, faUser, faUserPlus, faFire,} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { HashLink as Link } from 'react-router-hash-link';

import { Component } from "react";




class  Navbarr extends Component {
  state = {clicked: false };
  handleClick = () =>{
    this.setState({clicked: !this.state.clicked})
  }
  
  render() {
return(
  <>
  <nav>
    <img className='logo' src={logo} alt="logo" />

  <div> 
    <ul id="navbar" className={this.state.clicked ? "#navbar active" : "#navbar"}>
      <li>
        <NavLink exact="true" activeclassname="active" to='/'>
        <FontAwesomeIcon icon={faHome} color="orange"/>
        Home |
        </NavLink>
        
      </li>
      <li>
      <Link to="home/#about" exact="true" activeclassname="active">
        <FontAwesomeIcon icon={faInfoCircle} color="orange"/>
        About Us |
        </Link>
      </li>
      <li>
      <Link exact="true" activeclassname="active" to="home/#featured">
        <FontAwesomeIcon icon={faFire} color="orange"/>
        Featured |
        </Link>
      </li>
      <li>
      <NavLink exact="true" activeclassname="active" to='/About'>
        
        Window Screens | 
        </NavLink>
      </li>
      <li>
      <NavLink className="login-link" exact="true" activeclassname="active" to='/login'>
        <FontAwesomeIcon icon={faUser} color="orange"/>
        Login 
        </NavLink>
      </li>
      <li>
      <NavLink className="signup-link"exact="true" activeclassname="active" to='/signup'>
        <FontAwesomeIcon icon={faUserPlus} color="orange"/>
        Sign Up for Free 
        </NavLink>
      </li>
    </ul>
  </div>
  <div id="mobile" onClick={this.handleClick}>
    <i id="bar"
    className={this.state.clicked ? 'fas fa-times' :
  "fas fa-bars"}
    ></i>
  </div>
  </nav>
  </>
)
}
}

export default Navbarr