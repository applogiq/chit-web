/* ************************** Import Packages *************************** **/
import React from 'react'

/* ************************** Import Images *************************** **/
import Logo from "../../public/assets/images/logo down.png"
import Image from "next/image";

/* ************************** Import CSS *************************** **/
import styles from "./footer.module.css";

const Footer = () => {
    //  Footer Section
    return (
        <div>
            <footer className={`p-5 text-white text-center position-relative ${styles.footertxt}`}>
                <div className="continer">
                    <footer className="page-footer font-small special-color-dark pt-4">
                        <div className="row">

                            <div
                                className={`col-md-3 col-lg-4 col-xl-3 mx-auto  ${styles.logoDivision}`}
                            >
                                <Image
                                    src={Logo}
                                    alt="logo"
                                    width="140px"
                                    height="200px"
                                    className="img-fluid position"
                                    layout="intrinsic"
                                />
                                <br />
                                <div
                                    className={`d-flex justify-content-space-between ${styles.iconsSocial}`}
                                >
                                    <a className="fb-ic ">
                                        <i className={`fab fa-facebook mr-4 ${styles.icons}`} />
                                    </a>
                                    <a className="ins-ic">
                                        <i className={`fab fa-instagram mr-4 ${styles.icons}`}> </i>
                                    </a>
                                    <a className="tw-ic">
                                        <i className={`fab fa-twitter mr-4 ${styles.icons}`}> </i>
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-3 mt-5">
                                <div className="col-md-12">
                                    <div className="d-flex justify-content-start">
                                        <h4 className={`${styles.fontsStyle}`}>News Letter</h4>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="row">
                                        <div className="col-md-9">
                                            <h6 className={`mt-4 d-flex justify-content-start mb-0  ${styles.fontsStyle}`}>Your email</h6>
                                            <form className="input-group">
                                                <input type="text" className="form-control form-control-sm"
                                                    aria-label="Your email" aria-describedby="basic-addon2" />&nbsp;&nbsp;&nbsp;
                                            </form>
                                        </div>
                                        <div className="col-md-2 mt-5">
                                            <div className="input-group-append">
                                                <button className={`btn btn-sm btn-outline-dark text-white my-0 ${styles.footerbtntxt}`} type="button">Join</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className={`col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 mt-5 ${styles.column1}`}
                            >
                                <h6 className={`${styles.footHead} ${styles.aboutColumn} ${styles.fontsStyle}`}>
                                    Know Your Jewellwry
                                </h6>
                                <div className={`${styles.fontsAlign} pt-3`}>
                                    <p>Diamond Guide</p>
                                    <p>Gold Guidey</p>
                                    <p>Silver Guide</p>
                                    <p>Platinum Guide</p>
                                    <p>Gold Price</p>
                                </div>
                            </div>
                            <div
                                className={`col-md-1 col-lg-1 col-xl-1 mx-auto mb-4 mt-5 ${styles.column2}`}
                            >
                                <h6 className={`${styles.footHead} ${styles.aboutColumn} ${styles.fontsStyle} `}>
                                    About
                                </h6>
                                <div className={`${styles.fontsAlign} pt-3`}>
                                    <p>About Us</p>
                                    <p>Our story</p>
                                    <p>Careers</p>
                                    <p>FAQs</p>
                                </div>
                            </div>
                            <div
                                className={`col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 mt-5 ${styles.column2}`}
                            >
                                <h6 className={`${styles.footHead} ${styles.aboutColumn} ${styles.fontsStyle}`}>
                                    <p>Customer Service</p>
                                </h6>
                                <div className={`${styles.fontsAlign} pt-1`}>
                                    <p>227, Brough Rd</p>
                                    <p> Erode, Tamil Nadu, 638011</p>
                                    <p>04242254164</p>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>

            </footer>
            <div className={`col-md-12 text-center text-white ${styles.footercolumn}`}>
                <p className={`${styles.foottext}`}> &copy; LUXURY GOLD. All rights reserved</p>
                <a href="#" className="position-absolute bottom-0 end-0 p-5">
                    <i className="bi bi-arrow-up-circle f1"></i>
                </a>
            </div>
        </div>
    )
}

export default Footer;