import {useEffect} from 'react'
import './Dashboard.scss';

function Dashboard({searchVisibilty}) {
  useEffect(searchVisibilty)
  
  return (
    <div className="dashboard">
      Dashboard
    </div>
  );
}

export default Dashboard;
