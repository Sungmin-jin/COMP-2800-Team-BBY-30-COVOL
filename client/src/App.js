import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Our own components
import LandingPage from './components/LandingPage';
import UserProfile from  './components/UserProfile';
import WelcomePage from './components/WelcomePage';

import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alert from './components/Alert';

//Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';


if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    setAuthToken(localStorage.token);
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Alert />
          <Switch>
            <Route exact path='/' component={LandingPage} />
            
            <Route path='/register' component={Register} />
            <Route path='/login' component={Login} />

            <Route path='/userprofile' component={UserProfile} />
            <Route path='/welcome' component={WelcomePage} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};
export default App;
