
/** **************************** Import Packages ****************************** */
import React from 'react';

/** **************************** Import Components ****************************** */
import Banner from './banner';
import Description from './description';
import Gallery from './gallery';
// import Review from './review';

const Home = () => {

  return (
    <>
      <Banner />
      <div className="mt-5">
        <Description />
      </div >
      <Gallery />
      {/* <Review /> */}
    </>
export default Home;