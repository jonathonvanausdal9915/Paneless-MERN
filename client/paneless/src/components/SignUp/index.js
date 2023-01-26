import './index.scss'
import Loader from 'react-loaders'
import { faUserPlus,} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SignUp = () => {
    return ( <>
    <div className="login-box">
          <div className="login">
            <h2 className="loginh2">Sign Up</h2>
            <p className="ptag">Already Have an account? <u>Login</u></p>
            <br />
            <FontAwesomeIcon icon={faUserPlus} size='5x'color="orange"/>
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