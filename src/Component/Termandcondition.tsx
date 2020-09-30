import React from 'react';
import { Typography, Button, makeStyles, Container } from '@material-ui/core';
import Bg from './bg.jpg';
import { useHistory } from 'react-router-dom';

const Termandcondition: React.FC = () => {

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
        root: {
            backgroundImage: `url(${Bg})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        },
    }));
    const classes = useStyles();
    return (

        <div className={classes.root}>
            <Container component="main" maxWidth="xs" style={{ minHeight: '100vh' }} >
            <div className={classes.paper}>
                    <h2 style={{ alignItems: "center" }}>Terms and Conditions</h2>
                    <Typography>
                        You agree that by accessing the Site, you have read, understood, and agree to be bound by all of these Terms and Conditions.
                        If you do not agree with all of these Terms and Conditions, then you are expressly prohibited from using the Site and you
                        must discontinue use immediately.<br /><br />Supplemental terms and conditions or documents that may be posted on the Site from time to
                        time are hereby expressly incorporated herein by reference. We reserve the right, in our sole discretion, to make changes
                        or modifications to these Terms and Conditions at any time and for any reason.We will alert you about any changes by updating
                        the “Last updated” date of these Terms and Conditions, and you waive any right to receive specific notice of each such change.
                        <br /><br />It is your responsibility to periodically review these Terms and Conditions to stay informed of updates. You will be subject
                        to, and will be deemed to have been made aware of and to have accepted, the changes in any revised Terms and Conditions by your
                        continued use of the Site after the date such revised Terms and Conditions are posted.<br /><br />The information provided on the
                     Site is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use
                      would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country.
                      <br /><br />Accordingly, those persons who choose to access the Site from other locations do so on their own initiative and are solely
                      responsible for compliance with local laws, if and to the extent local laws are applicable.
                    </Typography>
                    <Button  color="primary" variant="contained" style={{ marginTop: 15 }} onClick={handleClick}>
                    Back to login
                    </Button>
                </div>
            </Container>
        </div>

    );
}

export default Termandcondition;