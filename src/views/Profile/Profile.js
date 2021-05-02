import {useEffect} from 'react'
import './Profile.scss';

function Profile({searchVisibilty}) {
  useEffect(searchVisibilty)
  
  return (
    <div className="profile">
      <div className="page-header">
        <h2>Profile</h2>
        <hr />
      </div>
      <main>
      </main>
    </div>
  );
}

export default Profile;
