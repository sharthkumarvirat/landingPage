import React, { useEffect } from 'react';
import { Grid, Typography, Box, useMediaQuery, useTheme } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const theme = useTheme();
    const isMdOrSm = useMediaQuery(theme.breakpoints.down('lg'));

    return (
        <div>
            <div className='px-16'>
                <img
                    src='https://logos-world.net/wp-content/uploads/2020/11/Nintendo-Logo.png'
                    alt='logo'
                    style={{ width: '10%' }} />
            </div>

            <Grid container alignItems='center' p={10}>
                <Grid item xs={12} lg={6} className='text-section' >
                    <Box display="flex" flexDirection="column" gap="1rem">
                        <Box>
                            <Typography
                                variant="h1"
                                className="responsive-h1"
                                data-aos="fade-left"
                                style={{ color: 'black' }}
                            >
                                Innovate.
                            </Typography>
                            <Typography
                                variant="h1"
                                className="responsive-h1"
                                data-aos="fade-right"
                                style={{ color: 'black' }}
                            >
                                Revolutionize.
                            </Typography>
                            <Typography
                                variant="h1"
                                className="responsive-h1"
                                data-aos="fade-left"
                                style={{ color: 'black' }}
                            >
                                Dominate.
                            </Typography>
                        </Box>
                        <Box display="flex" gap="2rem">
                            <button className="sc-cseZMA" style={{ backgroundColor: '#BB0D1A' }}>
                                Our Solutions
                            </button>
                            <button className="sc-cseZMA" style={{ backgroundColor: '#7C1616' }}>
                                Contact Us
                            </button>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} lg={6}  >
                    <Grid container alignItems="center" justifyContent="center">
                        {isMdOrSm ? (
                            <Grid item>
                                <Box>
                                    <div className='circle'></div>
                                </Box>
                            </Grid>
                        ) : (
                            <>
                                <Grid item xs={12} sm={6}>
                                    <Box display="flex" flexDirection="column" alignItems="center" gap={2} mb={20} >
                                        <div className='circle'></div>
                                        <img
                                            src='https://naratech.in/static/media/landing1.132109eaa64579012596.png'
                                            className="grayScale"
                                            alt="Landing Image 1"
                                            data-aos="fade-right"
                                            style={{ width: '50%' }}
                                        />
                                        <img
                                            src='https://naratech.in/static/media/landing3.f575211b8481ebbd0c8573d41ff42d49.svg'
                                            alt="Landing Image 3"
                                            data-aos="fade-right"
                                            style={{ width: '50%' }}
                                        />
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={6} >
                                    <Box display="flex" alignItems="center" justifyContent="center">
                                        <img
                                            src='https://naratech.in/static/media/ladning2.bfc91a8d57b755a4bf71.png'
                                            className="grayScale"
                                            alt="Landing Image 2"
                                            data-aos="fade-right"
                                            style={{ width: '60%' }}
                                        />
                                    </Box>
                                </Grid>
                            </>
                        )}
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default Header;
