import './index.scss'
import logo from '../../assets/images/transparent.png'
import { faPhone,faAddressBook,faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faInstagram } from "@fortawesome/free-brands-svg-icons"
const Footer = () => {
    return ( <>
    <div className="footer">
    <img className="logo-1" src={logo} alt="logo" />
    <span className="span-1">
        <h2>Services</h2>
        <br />
        <p> Window Washing</p>
        <br />
        <i><FontAwesomeIcon icon={faFacebook} size="2x"color="#0074B7"/></i>
        &nbsp;
        &nbsp;
        <i><FontAwesomeIcon icon={faInstagram} size="2x"color="#0074B7"/></i>
    </span>
    <span className="span-2">
        <h2>Contact Information</h2>
        <br />
        <p><i><FontAwesomeIcon icon={faAddressBook} size="1x"color="#0074B7"/></i> &nbsp;636 North 650 West American Fork, Utah 84003</p>
        <br />
        <p><i><FontAwesomeIcon icon={faPhone} size="1x"color="#0074B7"/></i> &nbsp;385-484-1260</p>
        <br />
        <p><i><FontAwesomeIcon icon={faEnvelope} size="1x"color="#0074B7"/></i> &nbsp;testing@testing.net</p>
    </span>
    <span className="span-3">
        <h2>Operation Hours</h2>
        <br />
        <p>Monday-Friday: 7 AM to 7PM</p>
    </span>
    </div>
    </>
    )
}
export default Footer