import './index.scss'
import logo from '../../assets/images/transparent.png'
import { faPhone,faAddressBook,faEnvelope,faCalendar} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faInstagram } from "@fortawesome/free-brands-svg-icons"
const Footer = () => {
    return ( <>
    <div className="footer">
    <img className="logo-1" src={logo} alt="logo" />
    <span className="span-1">
        <h3><u>Services</u></h3>
       
        <p> Window Washing</p>
        <br />
        <i><FontAwesomeIcon icon={faFacebook} size="3x"color="#0074B7"/></i>
        &nbsp;
        &nbsp;
        <i><FontAwesomeIcon icon={faInstagram} size="3x"color="#0074B7"/></i>
    </span>
    <span className="span-2">
        <h3><u>Contact Information</u></h3>
        
        <p><i><FontAwesomeIcon icon={faAddressBook} size="1x"color="#0074B7"/></i> &nbsp;636 North 650 West American Fork, Utah 84003</p>
        
        <p><i><FontAwesomeIcon icon={faPhone} size="1x"color="#0074B7"/></i> &nbsp;385-484-1260</p>
        
        <p><i><FontAwesomeIcon icon={faEnvelope} size="1x"color="#0074B7"/></i> &nbsp;testing@testing.net</p>
    </span>
    <span className="span-3">
        <h3><u>Operation Hours</u></h3>
        <p><i><FontAwesomeIcon icon={faCalendar} size="1x"color="#0074B7"/></i> &nbsp;Monday-Friday: 7 AM to 7PM</p>
      
    </span>
    </div>
    </>
    )
}
export default Footer