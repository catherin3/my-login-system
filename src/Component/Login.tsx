import React, { useState } from 'react';
import { Grid, Button, TextField, Typography, makeStyles, Container, Checkbox, FormControlLabel, Box } from '@material-ui/core';
import Boogle from './Boogle.png';
import Bg from './bg.jpg';
import { Link, useHistory } from 'react-router-dom';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" style={{ marginLeft: 150 }}>
      {'Copyright © 2020'}
    </Typography>
  );
}
function Terms() {
  return (
    <Typography variant="body2" color="textSecondary" align="left">
      <Link to={'/term'} style={{ textAlign: 'left', textDecoration: 'none', fontWeight: 'bold', color: '#484848', marginLeft: 5 }}>Terms
    </Link>
    </Typography>

  );
}

function About() {
  return (
    <Typography variant="body2" color="textSecondary" align="left">
      <Link to={'/about'} style={{ textAlign: 'left', textDecoration: 'none', fontWeight: 'bold', color: '#484848' }}>About
    </Link>
    </Typography>

  );
}

const Login: React.FC = () => {

  const [passwordShown] = useState(false);
  const useStyles = makeStyles((theme) => ({
    paper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    root: {
      backgroundImage: `url(${Bg})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }
  }));


let history = useHistory();
function handleClick() {
    history.push("/home");
}


  const classes = useStyles();
  return (
    <div className={classes.root} >
      <Container component="main" maxWidth="xs" style={{ minHeight: '100vh',  }} >
        <div className={classes.paper}>
          <img src={Boogle} style={{ width: 130, marginTop: 50 }} alt="brand" />

          <Typography component="h1" variant="h5">
            Login
      </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type={passwordShown ? "text" : "password"}
              id="password"
              autoComplete="current-password">
            </TextField>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleClick}
            >
              Sign In
        </Button>
            <Grid container>
              <Grid item xs>
                <Link to='/forgotpassword'>Forgot Password?
            </Link>
              </Grid>
              <Grid item>
                <Typography style={{ fontSize: 14 }}>Don't have an account? <Link style={{ textDecoration: 'none', fontWeight: 'bold', color: "#3F51B5", fontSize: 14 }} to='/signup'>
                  Sign Up
            </Link></Typography>
              </Grid>
              <div style={{ display: 'flex', flexDirection: "column" }}>
                <Typography style={{ textAlign: 'center', marginTop: 10 }}>OR</Typography>
                <Button color="primary" variant="contained" style={{ marginTop: 15, width: 390 }}>
                  <Link to={`/`} style={{ textDecoration: 'none', color: 'white' }}>Sign in with Facebook</Link>
                </Button>

              </div>
            </Grid>
          </form>
        </div>
        <Box mt={10} display="flex" flexDirection="row">
          <About />
          <Terms />
          <Copyright />
        </Box>
      </Container>
    </div>
  );
}

export default Login;