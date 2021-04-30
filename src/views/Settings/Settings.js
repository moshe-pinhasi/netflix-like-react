import {useEffect} from 'react'

import './Settings.scss';

function Settings({searchVisibilty}) {
  useEffect(searchVisibilty)
  return (
    <div className="settings">
      Settings
    </div>
  );
}

export default Settings;
