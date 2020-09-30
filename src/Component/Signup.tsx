import React from 'react';
import { Button, Typography, Container, TextField, makeStyles, Checkbox } from '@material-ui/core';
import Boogle from './Boogle.png';
import Bg from './bg.jpg';
import { Link, useHistory } from 'react-router-dom';
// import { Formik, Form, Field, ErrorMessage } from 'formik';

const Signup: React.FC = () => {

    let history = useHistory();
    function handleClick() {
        history.push("/");
    }

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
                        Sign up
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
                            autoFocus>

                        </TextField>

                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="password"
                            label="Password"
                            name="password"
                            type="password"
                            autoComplete="password"
                            autoFocus >

                        </TextField>

                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="confirmpassword"
                            label="Confirm Password"
                            name="confirmpassword"
                            type="password"
                            autoComplete="confirmpassword"
                            autoFocus >

                        </TextField>

                        <div style={{ display: 'flex', flexDirection: "row" }}>
                            <Checkbox style={{}} />
                            <Typography>By signing up, you agree to our <Link to="/term">Terms and Conditions</Link></Typography>
                        </div>
                        <div style={{ display: 'flex', flexDirection: "column" }}>
                            <Button color="primary" variant="contained" style={{ marginTop: 15 }}>Sign up</Button>
                            <Button type="button" color="primary" variant="contained" style={{ marginTop: 15 }} onClick={handleClick}>Back to Login</Button>
                        </div>
                    </form>
                </div>
            </Container>
        </div>
    );
}

export default Signup;
