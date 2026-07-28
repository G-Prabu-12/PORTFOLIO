import { React, useEffect, useRef } from 'react';
import Hero from './components/Hero/Hero';
import About from './components/about/Abount';
import Career  from './components/Career/Career'
import WorkProcess from './components/work-process/Work_process';
import ContactUs from './components/ContactUs/ContactUs'



const FALLBACK_MS = 5000;

function Home() {


  return (
    <>

      {/* CHILD COMPONENTS */}
      <Hero />
      <About />
      <WorkProcess/>
      <Career/>
      <ContactUs/>

    </>
  );
};

export default Home;