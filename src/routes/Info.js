import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';
import InfoContent from '../components/InfoContent';

const Info = () => {
  return (
    <div>

      <Navbar />
      <HeroImg2 heading="INFO" text="Im a Fullstack developer" />
      <InfoContent />
      <Footer />
    </div>
  )
}

export default Info;