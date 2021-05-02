import {useEffect, useContext} from 'react'
import {UserContext} from '../../context';

import './Settings.scss';

function Settings({searchVisibilty}) {
  useEffect(searchVisibilty)
  const user = useContext(UserContext);

  return (
    <div className="settings">
      <div className="page-header">
        <h2>Settings</h2>
        <hr />
      </div>
      <main>
        Your username: {user.username}
      </main>
    </div>
  );
}

export default Settings;
