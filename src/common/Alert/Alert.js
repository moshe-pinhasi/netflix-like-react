import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

import './Alert.scss';

function Alert({severity, children}) {
  return (
    <div className={"alert " + "severity-" + severity}>
      <div className="alert-icon"><CheckCircleOutlineIcon /></div>
      <div className="alert-message"></div>{children}
    </div>
  );
}

export default Alert;
