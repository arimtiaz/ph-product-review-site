import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';


function App() {
  return (
    <div className="App">
        <FontAwesomeIcon icon={faCoffee} />
        <Button variant='primary'>Prince</Button>
    </div>
  );
}

export default App;
