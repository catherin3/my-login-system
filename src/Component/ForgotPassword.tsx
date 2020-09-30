import React from 'react';
import { Button, TextField, Typography, makeStyles, Container } from '@material-ui/core';
import Boogle from './Boogle.png';
import Bg from './bg.jpg';
import { Link } from 'react-router-dom';


const ForgotPassword: React.FC = () => {
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
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container component="main" maxWidth="xs" style={{ minHeight: '100vh' }} >
        <div className={classes.paper}>
          <img src={Boogle} style={{ width: 130, marginTop: 50 }} alt="brand" />

          <Typography component="h1" variant="h5">
            Trouble Logging in?
      </Typography>
          <Typography style={{ textAlign: 'center', color: '#7f7f7f', fontSize: 15, marginTop: 5 }}>Enter your email, phone, or <br />username and we'll send you a
            <br />link to get back into your account.
          </Typography>
          <form className={classes.form}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus >

            </TextField>
            <div style={{ display: 'flex', flexDirection: "column" }}>
              <Button color="primary" variant="contained" style={{ marginTop: 15 }}>Submit</Button>
              <Typography style={{ color: '#7f7f7f', textAlign: 'center', marginTop: 10 }}>OR</Typography>
              <Button color="primary" variant="contained" style={{ marginTop: 15 }}>
                <Link to={`/signup`} style={{ textDecoration: 'none', color: 'white' }}>Create New Account</Link>
              </Button>
              <Button color="primary" variant="contained" style={{ marginTop: 15 }}>
                <Link to={`/`} style={{ textDecoration: 'none', color: 'white' }}>Back to login</Link>
              </Button>

            </div>
          </form>
        </div>
      </Container>
    </div>
  );
}

export default ForgotPassword;