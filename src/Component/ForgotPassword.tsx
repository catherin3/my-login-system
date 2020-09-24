import React from 'react';
import { Grid, Button, TextField, Typography, InputAdornment } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import Boogle from './Boogle.png';
import Bg from './bg.jpg';
import { Link } from 'react-router-dom';


const ForgotPassword: React.FC = () => {

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
            <Typography style={{ textAlign: 'center' }}> Trouble Logging In?</Typography>
            <Typography style={{ textAlign: 'center', color: '#7f7f7f', fontSize: 15, marginTop: 5 }}>Enter your email, phone, or <br />username and we'll send you a
            <br />link to get back into your account.
          </Typography>
            <TextField margin="normal" label="Username or email" style={{ textAlign: "center" }}
              InputProps={{ startAdornment: <InputAdornment position="start"><AccountCircle /></InputAdornment> }}>
            </TextField>
          </div>
          <div style={{ marginBottom: 400 }}>
            <div style={{ display: 'flex', flexDirection: "column" }}>
              <Button color="primary" variant="contained" style={{ marginTop: 15 }}>Submit</Button>
              <Typography style={{color: '#a4a4a4', textAlign: 'center', marginTop: 10}}>OR</Typography>
              <Link style={{ textAlign: 'center', fontSize: 14, textDecoration: 'none', color: 'black', fontWeight: 'bold' }} to='/signup'>Create New Account
            </Link>
            </div>
          </div>
        </Grid>

      </Grid>
    </div>

  );
}

export default ForgotPassword;