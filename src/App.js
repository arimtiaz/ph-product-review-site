import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import Header from './components/Header/Header';
import { Helmet } from 'react-helmet';
import Dashboard from './components/Dashboard/Dashboard'
import { Route, Routes } from 'react-router-dom';
import Blogs from './components/Blogs/Blogs';
import ReviewPage from './components/ReviewPage/ReviewPage';
import Review from './components/Reviews/Review';
import Home from './components/Home/Home';


function App() {
  return (
    <div className="App">
        <Helmet>
          <title>Harley Reviews</title>
          <meta name="description" content="Helmet application" />
        </Helmet>
        <Header></Header>
        <Routes>  
          <Route path='/*' element={<Home />}></Route>
          <Route path='/reviews' element={<ReviewPage />}></Route>
          <Route path='/dashboard' element={<Dashboard />}></Route>
          <Route path='/blogs' element={<Blogs />}></Route>
        </Routes>
  
    </div>
  );
}

export default App;
