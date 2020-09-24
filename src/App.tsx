import React from 'react';
// import { makeStyles, Grid, Button, TextField, Typography, InputAdornment, Checkbox, Link } from '@material-ui/core';
// import { AccountCircle, LockRounded, EmailRounded, Facebook } from '@material-ui/icons';
// import Boogle from './Boogle.png';
// import Bg from './bg.jpg';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Component/Login';
import ForgotPassword from './Component/ForgotPassword';
import Signup from './Component/Signup';

const App: React.FC = () => {

  return (
    <Router>

      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/forgotpassword" component={ForgotPassword} />
        <Route exact path="/signup" component={Signup} />
      </Switch>

    </Router>

  );
}

export default App;
