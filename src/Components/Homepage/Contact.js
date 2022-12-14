import React from 'react';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export default function Contact() {
  return (
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={10} sm={10} md={4}>
          <Box
            sx={{
              width: '100%',
              width: 'auto',
              backgroundColor: '#fafafa',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'start',
              padding: '1em',
              '&:hover': {
                backgroundColor: '#f9fFff',
              },
            }}
          >
            <CallIcon style={{ fontSize: '4em', marginRight: '20px' }} />
            <div>
              <Typography variant="h6" style={{ color: 'var(--myred)' }}>
                <b>Phone & Whatsapp</b>
              </Typography>
              <Typography
                variant="h5"
                style={{ marginLeft: '20px', color: 'var(--myblue)' }}
              >
                +91 9999900000
              </Typography>
            </div>
          </Box>
        </Grid>

        <Grid item xs={10} sm={10} md={4}>
          <Box
            sx={{
              width: '100%',
              width: 'auto',
              backgroundColor: '#fafafa',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'start',
              padding: '1em',
              '&:hover': {
                backgroundColor: '#f9fFff',
              },
            }}
          >
            <EmailIcon style={{ fontSize: '4em', marginRight: '20px' }} />
            <div>
              <Typography variant="h6" style={{ color: 'var(--myred)' }}>
                <b>Email</b>
              </Typography>
              <Typography
                variant="h5"
                style={{ marginLeft: '20px', color: 'var(--myblue)' }}
              >
                Info@College.com
              </Typography>
            </div>
          </Box>
        </Grid>
      </Grid>
  );
}
