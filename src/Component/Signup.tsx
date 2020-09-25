import React from 'react';
import { Grid, Button, Checkbox, Typography } from '@material-ui/core';
// import { AccountCircle, LockRounded, Visibility } from '@material-ui/icons';
import Boogle from './Boogle.png';
import Bg from './bg.jpg';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';

function validateEmail(value: string) {
    let error;
    if (!value) {
        error = '*Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        error = 'Invalid email address';
    }
    return error;
}

const validatePassword = (values: string) => {
    let error = "";
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    if (!values) {
        error = "*Required";
    } else if (values.length < 8) {
        error = "*Password must be 8 characters long.";
    } else if (!passwordRegex.test(values)) {
        error = "*Requirement not met";
    }
    return error;
};

const validateConfirmPassword = (pass: any, value: any) => {

    let error = "";
    if (pass && value) {
        if (pass !== value) {
            error = "Password not matched";
        }
    }
    return error;
};

const Signup: React.FC = () => {

    return (

        <div>
            <Formik
                initialValues={{
                    Password: '',
                    ConfirmPassword: '',
                    Email: '',
                }}
                onSubmit={values => {
                    // same shape as initial values
                    console.log(values);
                }}
            >
                {({ errors, touched }) => (
                    <Form>
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
                                    <Field margin="normal" name="Email" type="text" placeholder="Email" validate={validateEmail} style={{ marginTop: 20 }}></Field>
                                    <ErrorMessage name="Email">
                                        {msg => <div style={{ color: 'red' }}>{msg}</div>}
                                    </ErrorMessage>

                                    <Field margin="normal" name="Password" type="Password" placeholder="Password" validate={validatePassword} style={{ marginTop: 20 }}></Field>
                                    <Typography style={{ fontSize: 12 }}>*Password must contain at least 8 characters, one uppercase,<br /> one number and one special case character.</Typography>
                                    <ErrorMessage name="Password">
                                        {msg => <div style={{ color: 'red' }}>{msg}</div>}
                                    </ErrorMessage>

                                    <Field margin="normal" name="ConfirmPassword" placeholder="Confirm Password" type="Password" validate={(value: any) =>
                                        validateConfirmPassword(value.password, value)
                                    } style={{ marginTop: 20 }}></Field>
                                    <ErrorMessage name="ConfirmPassword">
                                        {msg => <div style={{ color: 'red' }}>{msg}</div>}
                                    </ErrorMessage>

                                </div>

                                <div style={{ display: 'flex', flexDirection: "row" }}>
                                    <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} style={{ marginLeft: 130 }} ></Checkbox>
                                    <Typography style={{ marginRight: 120, marginTop: 10, fontSize: 14 }} >
                                        By signing up you accept our<Link to="/term"> Terms and Conditions</Link>
                                    </Typography>
                                </div>

                                <div style={{ marginBottom: 400 }}>
                                    <div style={{ display: 'flex', flexDirection: "column" }}>
                                        <Button color="primary" variant="contained" style={{ marginTop: 15 }} type="submit">Sign Up</Button>
                                    </div>


                                </div>
                            </Grid>
                        </Grid>
                    </Form>
                )}
            </Formik>
        </div>

    );
}

export default Signup;
