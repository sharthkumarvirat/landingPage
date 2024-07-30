import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Typography, Grid } from '@mui/material';

export default function Associations() {
    useEffect(() => {
        AOS.init({
            duration: 2000, // Animation duration
        });
    }, []);

    return (
        <div className='bg-[#7C1616] text-white p-10'>
            <Grid container justifyContent="center">
                <Grid item xs={12}>
                    <Typography variant="h2" align="center" gutterBottom >Associations</Typography>
                </Grid>
            </Grid>
            <Grid container justifyContent="center" alignItems="center" spacing={4} style={{ rowGap: '50px' }}>
                <Grid item xs={12} md={6} data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1500">
                    <div className="mediaImage" style={{ display: 'flex', justifyContent: 'center' }}>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7VI1cwPc9TVX7j7t9mZ7bamndmM32XUZXO7FfjiuJlNwKgr1MPXKpv3TF2o2_-eBYtk4&usqp=CAU' alt="Association 1" style={{ maxWidth: '100%', height: 'auto' }} />
                    </div>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant='h5'>
                        Copilotify.App is an AI-powered platform designed to make your life easier.
                        The company harnesses the power of advanced AI models like GPT and BARD to build tools that integrate seamlessly into your
                        day-to-day life, helping you make better decisions, complete tasks more efficiently, and overall, have a smoother digital experience.
                    </Typography>
                </Grid>
            </Grid>
            <Grid container justifyContent="center" alignItems="center" spacing={4} style={{ rowGap: '50px' }}>
                <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
                    <Typography variant='h5'>
                        A-OXO Design Studio offers a diverse range of services including Industrial Design and Product Design.
                        Our expertise extends beyond traditional design boundaries as we specialize in creating future-proof designs for existing products,
                        incorporating cutting-edge technologies. With our in-house lab facility, we conduct extensive research and prototype testing to ensure optimal
                        performance and user satisfaction.
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }} data-aos="fade-left" data-aos-easing="linear" data-aos-duration="1500">
                    <div className="mediaImage" style={{ display: 'flex', justifyContent: 'center' }}>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7VI1cwPc9TVX7j7t9mZ7bamndmM32XUZXO7FfjiuJlNwKgr1MPXKpv3TF2o2_-eBYtk4&usqp=CAU' alt="Association 2" style={{ maxWidth: '100%', height: 'auto' }} />
                    </div>
                </Grid>
            </Grid>
            <Grid container justifyContent="center" alignItems="center" spacing={4} style={{ rowGap: '50px' }}>
                <Grid item xs={12} md={6} data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1500">
                    <div className="mediaImage" style={{ display: 'flex', justifyContent: 'center' }}>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7VI1cwPc9TVX7j7t9mZ7bamndmM32XUZXO7FfjiuJlNwKgr1MPXKpv3TF2o2_-eBYtk4&usqp=CAU' alt="Association 3" style={{ maxWidth: '100%', height: 'auto' }} />
                    </div>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant='h5'>
                        A-OXO Design Studio offers a diverse range of services including Industrial Design and Product Design.
                        Our expertise extends beyond traditional design boundaries as we specialize in creating future-proof designs for existing products,
                        incorporating cutting-edge technologies. With our in-house lab facility, we conduct extensive research and prototype testing to ensure optimal
                        performance and user satisfaction.
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
}
