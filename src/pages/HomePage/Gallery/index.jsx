/* ************************** Import Packages *************************** **/
import React from 'react'

/* ************************** Import CSS *************************** **/
import styles from "./gallery.module.css";

const Gallery = () => {
    return (
        <div className="container mt-5">
            <h1 className={`${styles.gallerytxt1}`}>Our <span className={`${styles.gallerytxt}`}>Gallery</span></h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 mt-3">
                        <img
                            src="assets/images/gallery1.png"
                            alt="About Us"
                            className="img-fluid mr-3"
                        />
                    </div>
                    <div className="col-md-4 mt-3">
                        <img
                            src="assets/images/gallery2.png"
                            alt="About Us"
                            className="img-fluid mr-3"
                        />
                    </div>
                    <div className="col-md-4 mt-3">
                        <img
                            src="assets/images/gallery3.png"
                            alt="About Us"
                            className="img-fluid mr-3"
                        />
                    </div>

                </div>
                <div className="row" style={{ marginTop: "8px" }}>
                    <div className="col-md-4 mt-3">
                        <img
                            src="assets/images/gallery4.png"
                            alt="About Us"
                            className="img-fluid mr-3"
                        />
                    </div>
                    <div className="col-md-4 mt-3">
                        <img
                            src="assets/images/gallery5.png"
                            alt="About Us"
                            className="img-fluid mr-3"
                        />
                    </div>
                    <div className="col-md-4 mt-3">
                        <img
                            src="assets/images/gallery6.png"
                            alt="About Us"
                            className="img-fluid mr-3"
                        />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Gallery;