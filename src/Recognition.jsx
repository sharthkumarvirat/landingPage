import React, { useEffect } from 'react';
import { Grid, Typography } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Recognition() {
    useEffect(() => {
        AOS.init({
            duration: 6000, // Animation duration
        });
    }, []);

    return (
        <div className="w-full h-3/4 bg-black p-16 text-white">
            <Grid container direction="column" alignItems="center" spacing={4} className="sc-jTkTEj iayLQI">
                <Grid item>
                    <Typography variant="h2" align="center" className="ant-typography sc-gsMHZj gpMwQK css-1sn0ohr">Recognition</Typography>
                </Grid>
                <Grid item>
                    <Typography align="center" variant='h5' className="sc-dkHyXG dTnhaO" style={{ marginBottom: '36px' }} >We are proud as a team for our achievements</Typography>
                </Grid>
            </Grid>
            <Grid container justifyContent="center" alignItems="center" spacing={4} style={{ width: '100%', rowGap: '50px' }}>
                <Grid item xs={12} md={4} data-aos="zoom-out-left" data-aos-easing="linear" data-aos-duration="1500" style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                    <img width={210} src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Red_Circle%28small%29.svg/800px-Red_Circle%28small%29.svg.png' alt="Recognition 1" style={{ marginBottom: '16px' }} />
                    <Typography variant="h6" className="title" align="center">
                        "10 Best Electronics<br />
                        Startups in India"
                    </Typography>
                    <Typography align="center" className="subtitle">
                        Silicon India, Dec 2016
                    </Typography>
                </Grid>
                <Grid item xs={12} md={4} data-aos="zoom-out-left" data-aos-easing="linear" data-aos-duration="1500" style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                    <img width={210} src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Red_Circle%28small%29.svg/800px-Red_Circle%28small%29.svg.png' alt="Recognition 2" style={{ marginBottom: '16px' }} />
                    <Typography variant="h6" className="title" align="center">
                        SME Excellence Award for<br />Research &amp; Development
                    </Typography>
                    <Typography align="center" className="subtitle">
                        KSMBOA, 2015
                    </Typography>
                </Grid>
                <Grid item xs={12} md={4} data-aos="zoom-out-left" data-aos-easing="linear" data-aos-duration="1500" style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                    <img width={210} src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Red_Circle%28small%29.svg/800px-Red_Circle%28small%29.svg.png' alt="Recognition 3" style={{ marginBottom: '16px' }} />
                    <Typography variant="h6" className="title" align="center">
                        "10 Best Electronics<br />
                        Startups in India"
                    </Typography>
                    <Typography align="center" className="subtitle">
                        Silicon India, Dec 2016
                    </Typography>
                </Grid>
            </Grid>
        </div >
    );
}
