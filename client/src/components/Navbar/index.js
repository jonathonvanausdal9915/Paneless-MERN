import './index.scss'
import {NavLink,} from 'react-router-dom'
import logo from '../../assets/images/transparent.png'
import {faHome, faInfoCircle, faUser, faUserPlus, faFire,faPersonThroughWindow,faDoorOpen} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {HashLink as Link} from 'react-router-hash-link';


import Auth from '../../utils/auth';
import {Component} from "react";


class Navbarr extends Component {
    

    state = {clicked: false};
    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }

    render() {
        if (!Auth.loggedIn()) {
            return (
                <>
                    <nav>
                        <img className='logo' src={logo} alt="logo"/>

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
                                    <NavLink className="login-link" exact="true" activeclassname="active" to='/login'>
                                       
                                        Login&nbsp;
                                        <FontAwesomeIcon icon={faUser} color="orange"/>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className="signup-link" exact="true" activeclassname="active" to='/signup'>
                                        
                                        Sign Up for Free&nbsp;
                                        <FontAwesomeIcon icon={faUserPlus} color="orange"/>
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
        } else {
            return (
                <>
                    <nav>
                        <img className='logo' src={logo} alt="logo"/>
                            
                                
                            
                        <div>
                           
                            <ul id="navbar" className={this.state.clicked ? "#navbar active" : "#navbar"}>
                                <li>
                                    <NavLink exact="true" activeclassname="active" to='/'>
                                        <FontAwesomeIcon icon={faHome} color="orange"/>&nbsp;
                                        Home |
                                    </NavLink>

                                </li>
                               
                                <li>
                                    <NavLink exact="true" activeclassname="active" to='/screens'>
                                    <FontAwesomeIcon icon={faPersonThroughWindow} color="orange"/>&nbsp;
                                        Window Supplies |
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className="profile" exact="true" activeclassname="active" to='/profile'>
                                    My profile&nbsp;
                                    <FontAwesomeIcon size="1x" className="profile-i"icon={faUser} color="orange"/>
                                        
                                      
                                      
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className="logout" exact="true" activeclassname="active" to='/login' onClick={() => Auth.logout()}>
                                  
                                        Logout&nbsp;
                                        <FontAwesomeIcon icon={faDoorOpen} color="orange"/>
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
}


export default Navbarr