/* ************************** Import Packages *************************** **/
import React, { useState } from "react";

/* ***************************** Import Next  Packages ******************************** **/
import Link from "next/link";
import { useRouter } from "next/router";

/* ************************** Import CSS *************************** **/
import styles from "./header.module.css";

/* ************************** Import Icons *************************** **/
import { CgMenu } from "react-icons/cg";
const Header = () => {
  const [show, setShow] = useState("All");
  const pathLocation = useRouter();
  console.log(pathLocation?.pathname, "path");
  const DownloadApp = () => {
    setTimeout(() => {
      window.scrollTo(0, 3900);
    }, 3000);
  };

  const About = () => {
    setTimeout(() => {
      window.scrollTo(0, 1150);
    }, 1000);
  };

  const Contact = () => {
    window.scrollTo(0, 5000);
  };
  //  Header Nav-bar Section
  return (
    <div className="sacle-down">
      <nav
        className={`${styles.navtxt} ${styles.fixed} navbar navbar-expand-lg bg-white navbar-dark py-3 `}
      >
        <div className="container">
          <Link href="/">
            <img
              src="assets/images/logo.png"
              width="190px"
              height="70px"
              alt="logo"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navmenu"
          >
            <span className="navbar-toggler-icon">
              <CgMenu className={`${styles.menuIcon}`} />
            </span>
          </button>
          <div className="collapse navbar-collapse " id="navmenu">
            <ul
              className={`navbar-nav ms-auto ${styles.btnheaderspace} ${styles.fontsAlign}`}
            >
              <Link href="/">
                <li onClick={() => DownloadApp()}>
                  <button className={`${styles.btnheader}`}>
                    Download App
                  </button>
                </li>
              </Link>

              <Link href="/">
                <li
                  className={
                    show === "About"
                      ? `${styles.navli1} nav-item`
                      : `${styles.navli} nav-item`
                  }
                  onClick={() => setShow("About")}
                >
                  <a className="nav-link text-dark" onClick={() => About()}>
                    About
                  </a>
                </li>
              </Link>

              <li
                className={
                  pathLocation?.pathname === "/chit-scheme"
                    ? `${styles.navli1} nav-item`
                    : `${styles.navli} nav-item`
                }
                onClick={() => setShow("Chit")}
              >
                <Link href="/chit-scheme">
                  <a className="nav-link text-dark">Chit Scheme</a>
                </Link>
              </li>
              <li
                className={
                  show === "Contact"
                    ? `${styles.navli1} nav-item`
                    : `${styles.navli} nav-item`
                }
                onClick={() => setShow("Contact")}
              >
                <a
                  href="#contact-us"
                  className="nav-link text-dark"
                  onClick={() => Contact()}
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
