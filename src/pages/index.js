
/** **************************** Import Packages ****************************** */
import React from 'react';

/** **************************** Import Components ****************************** */
import Banner from "../pages/HomePage/Banner";
import Description from "../pages/HomePage/Description";
import Gallery from "../pages/HomePage/Gallery";
import Review from "../pages/HomePage/Review";
import MobileBanner from './HomePage/MobileBanner';


const Home = () => {

  return (
    <>
      <Banner />
      <div className="mt-5">
        <Description />
      </div >
      <Gallery />
      <Review />
      <MobileBanner />
    </>
export default Home;