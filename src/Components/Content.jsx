import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Typography, Grid } from '@mui/material';

export default function Content() {
    useEffect(() => {
        AOS.init({
            duration: 2000, // Animation duration
        });
    }, []);

    return (
        <div className='w-full min-h-screen bg-black text-white'>
            <Grid container spacing={2} alignItems="center" style={{ padding: '20px' }}>
                <Grid item xs={12} md={6} data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500">
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
                        <Typography variant='h3' align="center">Nara Technologies</Typography>
                        <Typography variant='h4' align="center">The Future of Tech Solutions</Typography>
                        <Typography variant='h5' align="center">Discover the cutting-edge technologies shaping your world at Nara Technologies! We specialize in IoT, AI, Electronic Systems Design, and Product development.</Typography>
                    </div>
                </Grid>
                <Grid item xs={12} md={6} data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="1500" style={{ display: 'flex', justifyContent: 'center' }}>
                    <img src="https://naratech.in/static/media/robo.975e8ff88245cd6febc7.png" alt="" style={{ maxWidth: '100%', height: 'auto' }} />
                </Grid>
            </Grid>
            <Grid container spacing={2} alignItems="center" style={{ padding: '20px' }}>
                <Grid item xs={12} md={6} data-aos="zoom-in-up" style={{ display: 'flex', justifyContent: 'center' }}>
                    <img src="https://naratech.in/static/media/circuit.099858257e52256232f8.png" alt="" style={{ maxWidth: '100%', height: 'auto' }} />
                </Grid>
                <Grid item xs={12} md={6} data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500" >
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
                        <Typography variant='h3' align="center">Experience Unparalleled <br />Expertise &amp; Innovation</Typography>
                        <Typography variant='h5' align="center" className="sc-dkHyXG dTnhaO">Our skilled collective of professionals collaborate to provide you with seamless,
                            powerful, and elegant solutions for the challenges of today and tomorrow.</Typography>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}
