/* ************************** Import Packages *************************** **/
import React from 'react'

/* ************************** Import CSS *************************** **/
import styles from "./header.module.css";

/* ************************** Import Icons *************************** **/
import { CgMenu } from 'react-icons/cg';
const Header = () => {
    //  Header Nav-bar Section
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-white navbar-dark py-3 fixed-top">
                <div className="container">
                    <img
                        src="assets/images/logo.png"
                        width="190px"
                        height="70px"
                    />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
                        <span className="navbar-toggler-icon">
                            <CgMenu className={`${styles.menuIcon}`} />
                        </span>
                    </button>
                    <div className="collapse navbar-collapse " id="navmenu">
                        <ul className={`navbar-nav ms-auto ${styles.btnheaderspace} ${styles.fontsAlign}`}>
                            <li>
                                <button className={`${styles.btnheader}`} >
                                    Download App
                                </button>
                            </li>
                            <li className="nav-item">
                                <a href="#About" className="nav-link text-dark">About</a>
                            </li>
                            <li className="nav-item">
                                <a href="#chitscheme" className="nav-link text-dark">ChitScheme</a>
                            </li>
                            <li className="nav-item">
                                <a href="#contact-us" className="nav-link text-dark">Contact-us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header;