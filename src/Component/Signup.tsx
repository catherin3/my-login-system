import React from 'react';
import {Grid, Button, TextField, Typography, InputAdornment} from '@material-ui/core';
import { AccountCircle, LockRounded, EmailRounded, Facebook } from '@material-ui/icons';
import Boogle from './Boogle.png';
import Bg from './bg.jpg';
import {Link } from 'react-router-dom';

const Signup: React.FC = () => {

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
            <TextField margin="normal" label="Email or Mobile Number" style={{ textAlign: "center" }} InputProps={{ startAdornment: <InputAdornment position="start"><AccountCircle /></InputAdornment> }}></TextField>
            <TextField margin="normal" label="Password" type="password" style={{ textAlign: "center" }} InputProps={{ startAdornment: <InputAdornment position="start"><LockRounded /></InputAdornment> }}></TextField>
            <TextField margin="normal" label="Confirm Password" type="password" style={{ textAlign: "center" }} InputProps={{ startAdornment: <InputAdornment position="start"><LockRounded /></InputAdornment> }}></TextField>
          </div>
          <div style={{ marginBottom: 400 }}>
            <div style={{ display: 'flex', flexDirection: "column" }}>
              <Button color="primary" variant="contained" style={{ marginTop: 15 }}>Sign Up</Button>
            </div>
           
           
          </div>
        </Grid>

      </Grid>
        </div>

    );
}

export default Signup;
