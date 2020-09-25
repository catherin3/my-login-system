import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import Bg from './bg.jpg';
import { Link } from 'react-router-dom';

const Termandcondition: React.FC = () => {

    return (

        <div>
            <Grid container style={{ minWidth: '100vh' }}>
                <Grid item xs={12} sm={6}>
                    <img src={Bg} style={{ width: '100%', height: '155%', objectFit: 'cover' }} alt="" />
                </Grid>
                <Grid container item xs={12} sm={6} direction="column" style={{ padding: 10 }}>
                    <div />
                    <h2 style={{ alignItems: "center" }}>Terms and Conditions</h2>
                    <Link style={{ position:"absolute",right: 0, fontSize: 18, marginTop: 27, marginRight: 10 }} to='/signup'>Back
                     </Link>
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
                </Grid>
            </Grid>
        </div>

    );
}

export default Termandcondition;