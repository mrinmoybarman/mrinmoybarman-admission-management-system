import React from 'react'
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

export default function Notification() {
  return (
    <Grid container xs={12} sm={12} md={12}>
        <Grid item xs={12} sm={12} md={10} style={{margin:'auto'}}>
          <Typography align="center" variant="h2" gutterBottom>
            <b>Important Notifications</b>
          </Typography>
          <Typography
            variant="h3"
            align="center"
            gutterBottom
            style={{ margin: '40px 0', color: 'var(--myred)' }}
          >
          <b>The Online form will be available from 1st December 2022, 01:00am to 19th December 2022, 23:59pm</b>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={10} style={{margin:'auto'}}>
            <Typography variant="subtitle2" gutterBottom>✅ Applicants who have paid the application fees and have not received their payment receipt, kindly email your proof of payment to refund.college@gmail.com. You need not pay again if your account has been debited.</Typography>
            <Typography variant="subtitle2" gutterBottom>✅ For those applicants who have not deposited their online application fees during the online application process from 1st December 2022 to 19th December 2022, their applications will be summarily rejected.</Typography>
            <Typography variant="subtitle2" gutterBottom>✅ REFUND POLICY: Those applicants who have paid application fees more than once are eligible for refund of their additional payment amount. Kindly mail your refund request to refund.college@gmail.com along with attached relevant payment receipts and application form.</Typography>
            <Typography variant="subtitle2" gutterBottom>✅ The Online Admission portalTeacher Training College Admission Notice is out: Admission Notice Dated 14.09.2022</Typography>
            <Typography variant="subtitle2" gutterBottom>✅ Candidates seeking admission   for the session 2022-23 at Online Admission portal shall have to submit an online form.</Typography>
            <Typography variant="subtitle2" gutterBottom>✅ We will start application portal at 1 AM on 1st December 2022 Indian Standard Time.</Typography>
            <Typography variant="subtitle2" gutterBottom>✅ Last date of online application and fees payment is 19th December 2022 till 23:59:59 Indian Standard Time.</Typography>
            <Typography variant="subtitle2" gutterBottom>✅ Candidates seeking admission   for the session 2022-23 at Online Admission portal shall have to go Online.</Typography>
            <Typography variant="subtitle2" gutterBottom>✅ The Max File Size for uploading documents is 2 MB</Typography>
        </Grid>
    </Grid>
  )
}
