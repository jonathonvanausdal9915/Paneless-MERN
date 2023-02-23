import Navbarr from '../Navbar';
import './index.scss';
import {Outlet} from 'react-router-dom';
import logo from '../../assets/images/transparent.png'
import { faAddressBook,faEnvelope,faCalendar,faPhone} from '@fortawesome/free-solid-svg-icons'
import { faFacebook,faInstagram } from "@fortawesome/free-brands-svg-icons"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'


const Layout = () => {
    return (<>
            <div className="App">
                <Navbarr/>
                
                <div className='page'>
                    
                
                    
                    <Outlet/>
                   
                  
                 
                    
        
                   <footer className="footy">
                        <div className="services">
                           <div className="services-position">
                           <h3 className="h3-tag">Services</h3>
                           <br />
                           <p> Window Cleaning</p>
                           <FontAwesomeIcon icon={faFacebook} size="2x"color="orange"/>&nbsp;&nbsp;<FontAwesomeIcon size="2x"icon={faInstagram} color="orange"/>
                           
                           </div>
                          
                        </div>

                        <div className="contact-info">
                            <div className="contact-position">
                            <h3 className="h3-tag">Contact Information</h3>
                            <br />
                            <p><FontAwesomeIcon icon={faAddressBook} color="orange"/>&nbsp;636 N 650 W American Fork, UT 84003</p>
                            <p><FontAwesomeIcon icon={faPhone} color="orange"/>&nbsp;801-319-6149</p>
                            <p><FontAwesomeIcon icon={faEnvelope} color="orange"/>&nbsp;Paneless@panelesswindows.com</p>
                            </div>
                        </div>

                        <div className="operationhr">
                            <div className="operation-position">
                                <h3 className="h3-tag">Operation Hours</h3>
                                <br />
                                <p><FontAwesomeIcon icon={faCalendar} color="orange"/>&nbsp;Monday-Friday:7AM-7PM</p>
                            </div>
                        </div>
                   </footer>


                    <footer className="footey">
                        <div className="copyright">
                            <p>
                                Copyright © 2023 Paneless Window Washing 
                            </p>
                        </div>
                     
                    </footer>
                   
                </div>
               
            </div>
           
        </>
    )
}
export default Layout