import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Component/Login';
import ForgotPassword from './Component/ForgotPassword';
import Signup from './Component/Signup';
import Term from './Component/Termandcondition';
import Nav1 from './Component/Nav1';
import Pokemon from './Component/Pokemon';

const App: React.FC = () => {


  return (
    <Router>
      <Switch>
        <>
          <Route exact path="/" component={Login} />
          <Route exact path="/forgotpassword" component={ForgotPassword} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/term" component={Term} />
          <Route exact path="/home" render={(props) => <Nav1 {...props} />} />
          <Route
            exact
            path="/:pokemonId"
            render={(props) => <Pokemon {...props} />}
          />
        </>
      </Switch>

    </Router>

  );
}

export default App;
