/* ************************** Import Packages *************************** **/
import React from 'react'

/* ************************** Import CSS *************************** **/
import styles from "./banner.module.css";

const banner = () => {
    return (
        <>
            <div className={`container-fluid pt-0 p-0 ${styles.banner}`} >
                <img
                    src="assets/images/banner_background.png"
                    width="100%"
                    height="550px"
                />

            </div>
            <div className="row">
                <div className={`col-md-6 ${styles.banertxt} `}>
                    <h1 className={`${styles.bannertext}`}>Every Piece Of</h1>
                    <h2 className={`${styles.bannertext}`}>Jewellery</h2>
                    <h2 className={`${styles.bannertext}`}>Tells A <span className={`${styles.bannertext1}`}>Story</span></h2>
                </div>
                <div className='col-md-6'>
                    <div className={` ${styles.banerimage} `}>
                        <img
                            src="assets/images/bannerimg.png"
                            width="550px"
                            height="550px"
                        />
                    </div>
                    <div className={` ${styles.banerimage1} `}>
                        <img
                            src="assets/images/bannerimg1.png"
                            width="258px"
                            height="228px"
                        />
                    </div>
                </div>
            </div>
        </>

    )
}

export default banner;