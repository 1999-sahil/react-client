import React from 'react';
import { useTheme } from '@mui/material';
import { Box, Typography } from '@mui/material';
import { shades } from '../../theme';

const Footer = () => {

    const { palette: { neutral }} = useTheme();

    return (
        <Box mt="70px" p="40px 0" backgroundColor={neutral.light}>
            <Box
                width="80%"
                margin="auto"
                display="flex"
                justifyContent="space-between"
                flexWrap="wrap"
                rowGap="30px"
                columnGap="clamp(20px, 30px, 40px)"
            >
                <Box width="clamp(20%, 30%, 40%)">
                    <Typography
                        variant="h4"
                        fontWeight="bold"
                        mb="30px"
                        color="red"
                    >
                        Y-STORE
                    </Typography>
                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Voluptatem explicabo architecto iure modi eos dicta molestias 
                        tempora numquam optio assumenda consequatur dolores sapiente 
                        quo nemo, nisi nostrum, nam voluptatibus cum.
                    </div>
                </Box>

                <Box>
                    <Typography variant="h4" fontWeight="bold" mb="30px">ABOUT US</Typography>
                    <Typography mb="30px">Careers</Typography>
                    <Typography mb="30px">Our Store</Typography>
                    <Typography mb="30px">Terms & Conditions</Typography>
                    <Typography mb="30px">Privacy Policy</Typography>
                </Box>
                <Box>
                    <Typography variant="h4" fontWeight="bold" mb="30px">CUSTOMER CARE</Typography>
                    <Typography mb="30px">Help Center</Typography>
                    <Typography mb="30px">Track Your Order</Typography>
                    <Typography mb="30px">Corporate & Bulk Purchasing</Typography>
                    <Typography mb="30px">Returns & Refunds</Typography>
                </Box>
                <Box width="clamp(20%, 25%, 30%)">
                    <Typography variant="h4" fontWeight="bold" mb="30px">CONTACT US</Typography>
                    <Typography mb="30px">Dwarka, West Delhi, Delhi-110059, India</Typography>
                    <Typography mb="30px">Email: y-store@gmail.com</Typography>
                    <Typography mb="30px">(+91)(00000-00000)</Typography>
                </Box>

            </Box>
        </Box>
    )
}

export default Footer