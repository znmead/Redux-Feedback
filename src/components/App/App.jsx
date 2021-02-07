import React, { useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { useDispatch } from 'react-redux';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
//TODO: import info

import Feeling from '../Feeling/Feeling.jsx'; 
// import Admin from '../Admin/Admin';
// impor



function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    getFeedback();
  }, []);

  const getFeedback = () => { // for admin page
    axios.get('/feedback')
      .then(response => {
        dispatch({ type: `SET_FEEDBACK`, payload: response.data });
      })
      .catch(error => {
        console.log(`Can't get feedback! ${error}`);
        alert(`Can't get feedback!`);
      })
  }

  // TODO: Add <Header />
  // TODO: Add <Footer />
  // TODO: Add <Route exact path='/' component={Home} getHome={getHome} />
 /* <Route path='/understanding' component={Understanding} getUnderstanding={getUnderstanding} />
          <Route path='/support' component={Support} getSupport={getSupport} />
          <Route path='/comments' component={Comments} getComments={getComments} />
          <Route path='/review' component={Review} getReview={getReview} />
          <Route path='/Admin' component={Admin} /> */ 

  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>


      </div>


      <div className='App container'>
        <Switch>
          
          <Route path='/feeling' component={Feeling} getFeedback={getFeedback} />
          
    

        </Switch>
      </div>

    </Router>

  );
}

export default App;
