import React from 'react';
import { makeStyles, Container } from '@material-ui/core';
//import Boogle from './Boogle.png';
import Bg from './bg.jpg';
// import Nav from './Nav';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//import { Link, useHistory } from 'react-router-dom';
// import { Formik, Form, Field, ErrorMessage } from 'formik';

const Home: React.FC = () => {

    const useStyles = makeStyles((theme) => ({
        paper: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
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
            <Container style={{ minHeight: '100vh' }} >
            
            </Container>
        </div>
    );
}

export default Home;