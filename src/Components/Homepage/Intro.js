import React from 'react';
import { Toolbar, Typography } from '@mui/material';
import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';


export default function Intro() {
  return (
    <div>
          <Grid item xs={12}>
     
        <Box component="main" sx={{ py:8 }}>
          {/* <Toolbar /> */}
          {/* <Typography variant="h2" align="center" gutterBottom>
            <b>Welcome to Online Admission Portal</b>
          </Typography> */}
          <Typography
            variant="h3"
            align="center"
            gutterBottom
            style={{ margin: '10px 0', color: 'var(--myred)' }}
          >
            <b>IMPORTANT NOTICE!</b>
          </Typography>
          <Typography variant="h5" align="center" gutterBottom>
            The College Admission Notice is out:{' '}
            <span style={{ color: 'var(--myblue)' }}>
              Admission Notice Dated 01.12.2022
            </span>
          </Typography>
          <Typography variant="h5" align="center" gutterBottom>
            Candidates seeking admission for the session 2022-23 at Mariyani
            College Admission shall have to submit an online form.
          </Typography>
          <Typography variant="h5" align="center" gutterBottom>
            The Online form will be available from{' '}
            <span style={{ color: 'var(--myred)' }}>
              1st December 2022, 01:00am to 16th December 2022, 23:59pm
            </span>
            .
          </Typography>
        </Box>
        </Grid>
    </div>
  );
}
