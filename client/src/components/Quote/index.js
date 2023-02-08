import './index.scss';
import Loader from 'react-loaders';
import { faEnvelope, } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';





 const Quote = () => {

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_og68bwu', 'template_zbjom5y', form.current, 'zEjs_2nVXooZbD7aG')
        .then((result) => {
            console.log(result.text);
            alert("Email Has Been Sent!")
        }, (error) => {
            console.log(error.text);
        });
    };

 
  return (<>
  
   <div className="outline">
   <h2 className="contact-us">Contact Us</h2>
        <form className="email-form"ref={form} onSubmit={sendEmail}>   
        <i><FontAwesomeIcon className="stary" icon={faEnvelope} size="4x"color="orange"/></i>
            <div className="layout-form">
      
                <input placeholder="First name" type="text"></input>&nbsp;&nbsp;
                <input placeholder="Last name"  type="text"></input>
            </div>

            <div className="layout-form">
                <input placeholder="Phone number" type="text"></input>&nbsp;&nbsp;
                <input placeholder="Email address"type="text"></input>
            </div>

            <div>
                <input className="address-quote" placeholder="Address"></input>
        
            </div>

            <div className="layout-form">
                <input placeholder="City"></input>&nbsp;&nbsp;
                <input placeholder="Zip"></input>
            </div>
           
            <input className="send"type="submit" value="Send" />
        </form>
     
        
    
   </div>
   <Loader type="ball-rotate" />
  </>
  )
}
export default Quote