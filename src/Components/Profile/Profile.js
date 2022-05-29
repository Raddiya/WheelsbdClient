import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';
import myPic from '../../Image/download (2).jpg';
import './Profile.css';

const Profile = () => {
    const [user, loading] = useAuthState(auth)
    console.log(user);
    return (
        <div>
            <div className="wrapper">
                <div className="left">
                    <img className='img-fluid' src={myPic} alt="user" />
                    <h4>{user.displayName ? user.displayName : 'undefined'}</h4>
                    <div className="info_data">
                        <div className="data">
                            <h4>Email</h4>
                            <p>{user.email}</p>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default Profile;