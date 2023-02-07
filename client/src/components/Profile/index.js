import './index.scss';
import Loader from 'react-loaders';
import { faPlus,faContactCard} from '@fortawesome/free-solid-svg-icons';
import { useQuery } from '@apollo/client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { QUERY_SINGLE_PROFILE } from '../../utils/queries';
import Auth from '../../utils/auth';
function Profile () {
    const user = Auth.getProfile();
    const profileId = user.data._id;
    const { data } = useQuery(QUERY_SINGLE_PROFILE, {
        variables: { _id: profileId },
      });
      const profile = data?.profile || {};
    
    return ( <>
   
    <div className="profile-box">
        <div className="profile-avatar">
            <button className="avatar-btn">Upload Photo<FontAwesomeIcon className="signup-icon" icon={faPlus} size='1x' color="orange" /></button>
        </div>
        <span className="greeting"><h1>Hi {profile.firstName}!</h1></span>
        <div className="info-box">
            <h3 className="basic-h3"><u>Basic Info</u> <FontAwesomeIcon className="signup-icon" icon={faContactCard} size='1x' color="orange" /></h3>
            <br />
            <p >First Name&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;{profile.firstName}</p>
            <hr />
            <br />
            <p>Last Name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{profile.lastName}</p>
            <hr />
            <br />
            <p>Email Address&nbsp;&nbsp;&nbsp;{profile.email}</p>
            <hr />
            <br />
           
           
        </div>
    </div>
   

    
    <Loader type="ball-rotate" />
  </>
    )
              }
export default Profile