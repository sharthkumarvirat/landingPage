import React from 'react';
import { Typography, Grid, Button } from '@mui/material';

export default function Footer() {
    return (
        <div>
            <div className='w-full h-4/5 p-16 bg-[#7C1616] text-white'>
                <Grid container spacing={2} justifyContent="center" alignItems="center" className="sc-iBIYEh bfzbwy css-1sn0ohr">
                    <Grid item xs={12}>
                        <Typography variant="h2" align="center" gutterBottom className="responsive-h2">Join Us</Typography>
                    </Grid>
                    <Grid item xs={12} md={10}>
                        <Typography variant='h4' align="center">
                            Partner with Nara Technologies and step into the <br />
                            future of tech solutions. Together, we'll create <br />
                            intelligent, innovative, and disruptive solutions <br />
                            for the challenges of tomorrow.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={4} style={{ textAlign: 'center' }}>
                        <button className="sc-cseZMA" style={{
                            backgroundColor: 'red'}}>
                            Contact Us
                        </button>
                    </Grid>
                </Grid>
            </div>
            <div className='w-full h-3/4 p-16 bg-black text-white'>
                <Grid container justifyContent="center" alignItems="center" spacing={4}>
                    <Grid item xs={12} style={{ textAlign: 'center' }}>
                        <img src="https://naratech.in/static/media/Vector.a64b8e65146efe2a3742257a414eefc3.svg" alt="" className="bgVector" style={{ width: '10%', margin: '0 auto' }} />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h5" align="center" className="sc-dkHyXG dTnhaO">
                            © 2023 Nara Technologies. All Rights Reserved.
                        </Typography>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}
