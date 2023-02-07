import './index.scss';
import Loader from 'react-loaders';
import { faUser,faPlus} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Profile () {
    return ( <>
    <div className="profile-box">
        <div className="profile-avatar">
            <button className="avatar-btn">Add Photo<FontAwesomeIcon className="signup-icon" icon={faPlus} size='1x' color="orange" /></button>
        </div>
        <div className="info-box">
           
        </div>
    </div>

    
    <Loader type="ball-rotate" />
  </>
    )
              }
export default Profile