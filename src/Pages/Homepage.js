import React from 'react';
import Container from '@mui/material/Container';

import MyDrawer from '../Components/Homepage/MyDrawer';
import Intro from '../Components/Homepage/Intro';
import Contact from '../Components/Homepage/Contact';
import ButtonSection from '../Components/Homepage/ButtonSection';
import Notification from '../Components/Homepage/Notification';
import Banner from '../Components/Homepage/Banner';
import PrincMsg from '../Components/Homepage/PrincMsg';
import Footer from '../Components/Homepage/Footer';
import { Toolbar } from '@mui/material';



export default function Homepage() {
  return (
    <div>
      <MyDrawer />
      <Banner />
      <Container maxWidth="xl">
        <Intro />
        <Contact />
        <br />
        <br />
        <br />
        <ButtonSection />
        <br />
        <br />
        <br />
        <Notification />
        <br />
        <br />
        <br />
      </Container>
      <PrincMsg/>
      <br/>
      <br/>
      <br/>
      <Footer />
    </div>
  );
}
