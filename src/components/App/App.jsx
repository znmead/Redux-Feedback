import React, { useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { useDispatch } from 'react-redux';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
//TODO: import info

import Feeling from '../Feeling/Feeling.jsx';
import Understanding from '../Understanding/Understanding.jsx';
import Supported from '../Supported/Supported.jsx';
import Comments from '../Comments/Comments.jsx';
// import Review from '../Review/Review.jsx;
// import Admin from '../Admin/Admin';



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
  /*  />
            />
            />
   // TODO: add  <Route path='/review' component={Review} getReview={getReview} />
   // TODO: add  <Route path='/Admin' component={Admin} /> */

  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>This is a Feedback Form!</h1>
          <h4>Do you get it?</h4>
        </header>


      </div>


      <div className='App_container'>
        <Switch>

          <Route path='/Feeling' component={Feeling} getFeedback={getFeedback} />
          <Route path='/Understanding' component={Understanding} getFeedback={getFeedback} />
          <Route path='/Supported' component={Supported} getFeedback={getFeedback} />
          <Route path='/Comments' component={Comments} getFeedback={getFeedback} />

        </Switch>
      </div>

    </Router>

  );
}

export default App;
