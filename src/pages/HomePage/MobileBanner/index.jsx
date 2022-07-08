/* ************************** Import Packages *************************** **/
import React from 'react'

/* ************************** Import CSS *************************** **/
import styles from "./mobilebanner.module.css";

const MobileBanner = () => {

  return (
    <>
      <div className={`${styles.background}`}>
        <div className="container">
          <div className={`${styles.space} row`}>
            <div className="col-md-6">
              <h1 className={`${styles.fontStyle} d-flex justify-content-start mt-5`}>Download our App</h1>
              <p className={`${styles.txtcolor}`}>Get to know about our savings
                scheme and <br />Download our APP from Play store or App store to participate.</p>
              <div className="row mt-5">
                <div className="col-md-5">
                  <img
                    src="assets/images/playstore.png"
                    alt="About Us"
                    className="img-fluid mr-3"
                  />
                </div>
                <div className="col-md-6">
                  <img
                    src="assets/images/appstore.png"
                    alt="About Us"
                    className="img-fluid mr-3"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-6">
                  <img
                    src="assets/images/phoneside.png"
                    alt="mobile1"
                    className={`${styles.mob1}`}
                  />
                </div>
                <div className="col-md-6">
                  <img
                    src="assets/images/phonefront.png"
                    alt="mobile2"
                    className={`${styles.mob2}`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div >
      </div>
      <div className="col-md-12">
        <div className="mt-5">
        </div>
      </div>
    </>
  )
}

export default MobileBanner