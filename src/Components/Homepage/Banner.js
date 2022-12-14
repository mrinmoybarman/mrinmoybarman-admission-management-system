import { Grid, Typography } from '@mui/material';
import React from 'react';

export default function Banner() {
  return (
    <>
      <div
        style={{
          background:
            'url("https://1.bp.blogspot.com/-pqWS04zXEZ0/XgcKfZqEo6I/AAAAAAAAHHg/TDFyF1u2btkwrm7vjK4Md-ykFR_0d-51wCNcBGAsYHQ/w1200-h630-p-k-no-nu/Tinsukia%2BCommerce%2BCollege%2BRecruitment%2B2020.jpg")',
          height: 'auto',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div style={{width:'100%',height:'100%',background:'#0009',color:'#FFFF'}}>
            <Grid item xs={12} sm={12} md={10} style={{padding:'2em 0',textAlign:'center',width:'70%',margin:'auto'}}>
              <Typography variant='h2' gutterBottom style={{margin:'4rem 0'}}><b>Welcome to Online Admission System For College</b></Typography>
              <Typography variant='h4' gutterBottom style={{fontFamily:'"Patrick Hand", cursive',textShadow:'2px 2px 1px #0a0a0F77'}}>The pioneer institute of teacher education in the north-eastern region. The members of the college family would be very pleased to enroll you as a student for latest session.</Typography>
            </Grid>
        </div>
      </div>
      <br />
      <br />
      <br />
    </>
  );
}
