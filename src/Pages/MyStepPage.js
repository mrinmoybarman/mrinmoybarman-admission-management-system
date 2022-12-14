import { Container } from '@mui/system';
import * as React from 'react';
import MyDrawer from '../Components/Homepage/MyDrawer';
import StepContainer from '../Container/StepContainer';

export default function MyStepPage() {
  return (
    <>
      <MyDrawer />
      <Container style={{minHeight:'85vh'}}>
        <StepContainer />
      </Container>
      <div
        style={{
          background: '#101010',
          color: 'white',
          textAlign: 'center',
          padding: '1rem',
        }}
      >
        &copy; Gratia Technology
      </div>
    </>
  );
}
