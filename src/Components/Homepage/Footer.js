import React from 'react'
import { Avatar, Button, Grid, Typography } from '@mui/material';
import { textAlign } from '@mui/system';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

export default function () {
  return (
    <>
      <Grid container style={{background:'var(--yblue)',color:'white',padding:'2em',display:'flex',justifyContent:'center'}}>
        <Button variant="outlined" size="large">
          Apply Now
        </Button>
      </Grid>
      <div style={{background:'#101010',color:'white',textAlign:'center',padding:'1rem'}}>
        &copy; Gratia Technology
      </div>
    </>
  )
}
