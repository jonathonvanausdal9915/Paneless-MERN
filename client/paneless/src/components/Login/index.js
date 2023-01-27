import './index.scss'
import Loader from 'react-loaders'
import { faUser,} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  NavLink,} from 'react-router-dom'

const Login = () => {
    return ( <>
    <div className="login-box">
          <div className="login">
            <h2 className="loginh2">Login</h2>
            <p className="ptag">Don't have an account?<NavLink className="register" exact="true" to='/signup'>
        <u>Register</u>
        </NavLink></p>
            <br />
            <FontAwesomeIcon className="icon-user" icon={faUser} size='5x'color="orange"/>
            
            <form className="form-1">
            
              <input className="username" placeholder="Username"type='text'></input>
              
              <input className="password" placeholder="Pasword"type='password' ></input>
              <button className="loginbtn">Login</button>

            </form>
         
          </div>
    </div>
    <Loader type="ball-rotate" />
  </>
    )
}
export default Login