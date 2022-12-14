import React from 'react';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import GroupIcon from '@mui/icons-material/Group';
import { Button, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export default function ButtonSection() {
  return (
    <div>
      <Grid
        container
        spacing={6}
        justifyContent="center"
        style={{ alignItems: 'center' }}
      >
        <Grid item xs={12} sm={12} md={12}>
          <Typography align="center" variant="h2" gutterBottom>
            <b>Admission Helpline</b>
          </Typography>
        </Grid>

        <Grid item xs={12} sm={12} md={5}>
          <Grid
            container
            spacing={2}
            style={{ justifyContent: 'space-between' }}
          >
            <Grid item xs={12} sm={12} md={7}>
              <Typography variant="h5" gutterBottom>
                <b>Register</b>
              </Typography>
              <Typography gutterBottom>
                To apply for the college admissions, you need to register and
                submit your
              </Typography>

              <Typography
                variant="subtitle2"
                style={{ marginLeft: '10px' }}
                gutterBottom
              >
                1) Basic personal info,
              </Typography>
              <Typography
                variant="subtitle2"
                style={{ marginLeft: '10px' }}
                gutterBottom
              >
                2) Educational info,
              </Typography>
              <Typography
                variant="subtitle2"
                style={{ marginLeft: '10px' }}
                gutterBottom
              >
                3) upload your certificates,
              </Typography>
              <Typography
                variant="subtitle2"
                style={{ marginLeft: '10px' }}
                gutterBottom
              >
                4) Preview and Submit,
              </Typography>
              <Typography
                variant="subtitle2"
                style={{ marginLeft: '10px' }}
                gutterBottom
              >
                5) Pay to confirm your submission
              </Typography>
              <br/>
              <Button variant='outlined' color="error">Register</Button>
            </Grid>
            <Grid item xs={12} sm={12} md={5}>
              <Box
                sx={{
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'var(--myblue)',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <AppRegistrationIcon style={{ fontSize: '8em' }} />
              </Box>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={12} md={5}>
          <Grid container spacing={2} justifyContent="space-between">
            <Grid item xs={12} sm={12} md={7}>
              <Typography variant="h5" gutterBottom>
                <b>
                  Already <br />
                  Registered?
                </b>
              </Typography>
              <Typography gutterBottom style={{marginTop:'2rem'}}>
                You can download your application form and payment receipt after
                submission and payment.
              </Typography>
              <br/>
              <br/>
              <br/>
              <Button variant='outlined' color="success">Log In</Button>
            </Grid>
            <Grid item xs={12} sm={12} md={5}>
              <Box
                sx={{
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'var(--myblue)',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <GroupIcon style={{ fontSize: '8em' }} />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
