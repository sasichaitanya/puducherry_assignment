import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import EventListing from './components/event-listing';
import EventBooking from './components/event-booking';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/eventlisting" exact component={EventListing} />
            <Route path="/eventbooking/:selectedEvent" component={EventBooking} />
            <Redirect exact from="/" to="/eventlisting" />
            <Redirect exact from="/**" to="/eventlisting" />
          </Switch>
        </div>
      </Router>
    </Provider>
  )
}

export default App;
