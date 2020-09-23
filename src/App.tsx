import React from 'react';
import './App.css';
import { makeStyles, Grid, Button, TextField, Typography, InputAdornment, Checkbox,Link } from '@material-ui/core';
import { AccountCircle, LockRounded, EmailRounded, Facebook } from '@material-ui/icons';
import Boogle from './Boogle.png';
import Bg from './bg.jpg';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Signup from './Signup';

const useStyles = makeStyles({

});

function App() {  

  return (
  
    <div>
      <Grid container style={{ minWidth: '100vh' }}>
        <Grid item xs={12} sm={6}>
          <img src={Bg} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="" />
        </Grid>
        <Grid container item xs={12} sm={6} alignItems="center" direction="column" justify="space-around" style={{ padding: 10 }}>
          <div />
          <div style={{ display: 'flex', flexDirection: "column" }}>
            <Grid container justify="center" >
              <img src={Boogle} style={{ width: 130, marginTop: 120 }} alt="brand" />
            </Grid>
            <TextField margin="normal" label="Username or email" style={{ textAlign: "center" }} InputProps={{ startAdornment: <InputAdornment position="start"><AccountCircle /></InputAdornment> }}></TextField>
            <TextField margin="normal" label="Password" type="password" style={{ textAlign: "center" }} InputProps={{ startAdornment: <InputAdornment position="start"><LockRounded /></InputAdornment> }}></TextField>

          </div>
          <div style={{ marginBottom: 400 }}>
            <Link
              component="button"
              variant="body2"
              style={{ marginLeft: 70, fontSize: 12 }}
              onClick={() => {
                console.info("I'm a button.");

              }}
            >
              Forgot your password?
    </Link>
            <div style={{ display: 'flex', flexDirection: "column" }}>
              <Button color="primary" variant="contained" style={{ marginTop: 15 }}>Login</Button>
              <Typography style={{ fontSize: 13, marginTop: 10, textAlign: "center" }}> Or sign in with</Typography>
            </div>
            <div style={{ display: 'flex', flexDirection: "row", padding: 5 }}>
              <EmailRounded style={{ marginLeft: 60 }}></EmailRounded>

              <Facebook style={{ marginLeft: 10 }}></Facebook>
            </div>
            <div style ={{display: 'flex', flexDirection: "row", marginTop:5}}> 
              <Typography>Don't have an account?</Typography>
              <Link

              component="button"
              variant="body2"
              onClick={() => {
                
              }}
            >
             Sign up
    </Link>
              </div>
          </div>
        </Grid>

      </Grid>
    </div>
   
  );
}

export default App;
