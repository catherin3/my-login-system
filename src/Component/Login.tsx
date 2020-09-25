import React,{useState} from 'react';
import { Grid, Button, TextField, Typography, InputAdornment } from '@material-ui/core';
import { AccountCircle, LockRounded, Facebook, Visibility } from '@material-ui/icons';
import Boogle from './Boogle.png';
import Bg from './bg.jpg';
import { Link } from 'react-router-dom';

const Login: React.FC = () => {

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  return (

    <div>
      <form>
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
            <TextField margin="normal" label="Email" style={{ textAlign: "center" }}
              InputProps={{ startAdornment: <InputAdornment position="start"><AccountCircle /></InputAdornment> }}>
            </TextField>

            <TextField margin="normal" label="Password"  type={passwordShown ? "text" : "password"} style={{ textAlign: "center" }}
             InputProps={{ startAdornment: <InputAdornment position="start"><LockRounded />
             <Visibility style={{ position: "absolute", right: 0 }} onClick={togglePasswordVisiblity}></Visibility></InputAdornment> }}>
             </TextField>

          </div>
          <div style={{ marginBottom: 400 }}>
            <Link style={{ marginLeft: 100, fontSize: 12 }} to='/forgotpassword'>Forgot Password?
            </Link>

            <div style={{ display: 'flex', flexDirection: "column" }}>
              <Button color="primary" variant="contained" style={{ marginTop: 15 }}>Login</Button>
              <Typography style={{ fontSize: 17, textAlign: "center", marginRight: 10,marginTop: 10 }}> Or</Typography>
            </div>
            <div style={{ display: 'flex', flexDirection: "row", padding: 5 }}>
            <Facebook style={{marginLeft: 15}}/><Link style={{color: '#3b5998', textDecoration: 'none',marginTop: 3}}to="/">Login with Facebook </Link>
            </div>
            <div style={{ display: 'flex', flexDirection: "row", marginTop: 5 }}>
              <Typography style={{ fontSize: 15 }}>Don't have an account?</Typography>
              <Link style={{ textDecoration: 'none', fontWeight: 'bold', color: "#3F51B5", fontSize: 15 }} to='/signup'>
                Sign Up
            </Link>
            </div>
          </div>
        </Grid>
      </Grid>
      </form>
    </div>

  );
}

export default Login;