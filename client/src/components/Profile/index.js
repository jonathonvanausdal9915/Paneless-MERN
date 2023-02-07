import './index.scss';
import React from 'react';
import Loader from 'react-loaders';
import { faPlus,faContactCard} from '@fortawesome/free-solid-svg-icons';
import { useQuery } from '@apollo/client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { QUERY_SINGLE_PROFILE } from '../../utils/queries';
import Auth from '../../utils/auth';
import { useState } from 'react';
import ImageUploading from 'react-images-uploading';
function Profile () {
    const user = Auth.getProfile();
    const profileId = user.data._id;
    const { data } = useQuery(QUERY_SINGLE_PROFILE, {
        variables: { _id: profileId },
      });
      const profile = data?.profile || {};
      const [images, setImages] = React.useState([]);
      const maxNumber = 69;
    
      const onChange = (imageList, addUpdateIndex) => {
        // data for submit
        console.log(imageList, addUpdateIndex);
        setImages(imageList);
      };

    
    return ( <>
    

    <div className="profile-background">
    <div className="profile-box">
        <div className="profile-avatar">
        <ImageUploading
        single
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            <button className='imageupload-btn'
              style={isDragging ? { color: 'red' } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
              Upload Image +
            </button>
            &nbsp;
            
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img className="profile-image" src={image['data_url']} alt="Placeholder" height="100%" width="100%"/>
                <div className="image-item__btn-wrapper">
                  <button onClick={() => onImageUpdate(index)}>Update</button>
                  <button onClick={() => onImageRemove(index)}>Remove -</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
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
    </div>

    
    <Loader type="ball-rotate" />
  </>
    )
              }
export default Profile