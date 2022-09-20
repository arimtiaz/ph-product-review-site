import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import Header from './components/Header/Header';
import { Helmet } from 'react-helmet';


function App() {
  return (
    <div className="App">
        <Helmet>
          <title>Harley Reviews</title>
          <meta name="description" content="Helmet application" />
        </Helmet>
        <Header></Header>
    </div>
  );
}

export default App;
