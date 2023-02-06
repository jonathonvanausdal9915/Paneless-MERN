import './index.scss';
import React, { useState } from 'react';
import Loader from 'react-loaders';
import { faUserPlus,} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useMutation } from '@apollo/client';
import {  NavLink,} from 'react-router-dom';
import { ADD_PROFILE } from '../../utils/mutation';
import Auth from '../../utils/auth';

const SignUp = () => {
  const [formState, setFormState] = useState({
    firstName: '',
    lastName:'',
    email: '',
    password: '',
  });
  const [addProfile, data ] = useMutation(ADD_PROFILE);



const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addProfile({
        variables: { ...formState },
      });

      Auth.login(data.addProfile.token);
    } catch (e) {
      console.error(e);
    }
  };


const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };
    return ( <>
    <div className="login-box">
          <div className="signup">
            <h2 className="loginh2">Sign Up</h2>
            <p className="ptag">Already Have an account? <NavLink className="login-link1" exact="true" to='/login'>
        <u>Login</u>
        </NavLink></p>
            <br />
            <FontAwesomeIcon className="signup-icon" icon={faUserPlus} size='5x'color="orange"/>
            <form onSubmit={handleFormSubmit} className="form">
            
              <input className="firstname" name="firstName" value={formState.firstName} onChange={handleChange} required={true} placeholder="First name"type='text'></input>
             
              <input className="lastname" name="lastName" value={formState.lastName} onChange={handleChange} required={true} placeholder="Last name"type='text'></input>
              
              <input className="emailaddress" name="email" value={formState.email} onChange={handleChange} required={true} placeholder="Email address"type='text'></input>
              
              
              <input className="password" name="password"  value={formState.password} onChange={handleChange} required={true} placeholder="Pasword"type='password' ></input>
             
              
              <button className="loginbtn" name="login" type="submit"onClick={handleFormSubmit}>Sign Up</button>

            </form>
         
          </div>
    </div>
    <Loader type="ball-rotate" />
  </>
    )
}
export default SignUp