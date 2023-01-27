import './index.scss'
import Loader from 'react-loaders'
import { faUserPlus,} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  NavLink,} from 'react-router-dom'

const SignUp = () => {
    return ( <>
    <div className="login-box">
          <div className="signup">
            <h2 className="loginh2">Sign Up</h2>
            <p className="ptag">Already Have an account? <NavLink className="login-link1" exact="true" to='/login'>
        <u>Login</u>
        </NavLink></p>
            <br />
            <FontAwesomeIcon className="signup-icon" icon={faUserPlus} size='5x'color="orange"/>
            <form className="form">
            
              <input className="firstname" placeholder="First name"type='text'></input>
             
              <input className="lastname" placeholder="Last name"type='text'></input>
              
              <input className="emailaddress" placeholder="Email address"type='text'></input>
              
              
              <input className="password" placeholder="Pasword"type='password' ></input>
             
              <input className="password-confirm" placeholder="Confirm Password"type='password' ></input>
              <button className="loginbtn">Sign Up</button>

            </form>
         
          </div>
    </div>
    <Loader type="ball-rotate" />
  </>
    )
}
export default SignUp