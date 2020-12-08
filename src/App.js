import AppStyles from './App.module.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { } from '@fortawesome/free-bold-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

const App = () => {
  return (
    <div className={AppStyles.App}>
      <Button variant="danger">Danger</Button>
      <FontAwesomeIcon icon={faFacebook} />
    </div>
  );
};

export default App;
