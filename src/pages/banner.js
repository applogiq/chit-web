/* ************************** Import Packages *************************** **/
import React from 'react'

/* ************************** Import CSS *************************** **/
import styles from "./banner.module.css";

const banner = () => {
    return (
        <>
            <div className="img-fluid pt-0" >
                <img
                    src="assets/images/banner_background.png"
                    width="100%"
                    height="550px"
                />
            </div>
            {/* <div className="row">
                <div className={`${styles.bannertxt} col-md-6`}>
                    <h1>Every piece of</h1>
                    <h1>jewellery</h1>
                    <h1>Tells a <strong>Story</strong></h1>
                </div>
            </div> */}
        </>

    )
}

export default banner;