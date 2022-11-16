import React from 'react';
import About from "./About";
import Navbar from "./Navbar";
import Footer from "./Footer";
import OurTeam from "./OurTeam";
import CloudServices from "./CloudServices";
import './index.scss';

function App() {
  return (
    <>
      <Navbar />
      <About />
      <Footer />
      <OurTeam />
      <CloudServices />
    </>
  );
}

export default App;
