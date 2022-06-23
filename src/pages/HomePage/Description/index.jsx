/* ************************** Import Packages *************************** **/
import React from 'react'

/* ************************** Import CSS *************************** **/
import styles from "./description.module.css";

const description = () => {

    return (
        <div className="">
            <div className="container">
                <div className={`${styles.space} row`}>
                    <div className="col-md-6">
                        <img
                            src="assets/images/image1.png"
                            alt="About Us"
                            className="img-fluid mr-3"
                        />
                    </div>
                    <div className="col-md-5">
                        <h1 className={`${styles.fontStyle} d-flex justify-content-start mt-5`}>Jewellery</h1>
                        <h3 className={`${styles.fontStyle1} d-flex justify-content-start`}>at its best standard</h3>
                        <p className={`${styles.txtcolor} mt-4`}>We work with the vision of offering tastefully designed jewellery at revolutionary prices. This is
                            achieved by eliminating all inefficiencies which result in drastically reduced costs.
                            With LUXURY GOLD, users stand to save as much as 30% when compared to prices in the market.</p>
                    </div>
                    <div className="col-md-1"></div>
                </div>
            </div>
            <div className={`${styles.bgColor} mt-5 pb-5`}>
                <div className="container">
                    <div className={`${styles.space} row`}>

                        <div className="col-md-8">
                            <h1 className={`${styles.gallerytxt1} mt-5 container`} >Our <span className={`${styles.gallerytxt}`} >Story</span></h1>
                            <p className={`${styles.txtcolor} mt-4`}>We began in 2008 with the simple motto of democratising jewellery. And today, after 10 glorious years,
                                it has come to be recognised as one of the top 20  portals in India. Steadily growing from strength to strength since inception,
                                we have also established 100 stores across the length and breadth of India.
                                Since July 2016, we joined forces with India’s most desired and largest jewellery brands, through a strategic investment.
                                This takes us another step closer to achieving our shared mission - to make beautiful jewellery accessible to everyone.
                                We also provide the exquisite craftsmanship of beautiful jewellery designs such as rings, earrings, pendants, necklace, chains,
                                bangles, bracelets, mangalsutra, nose pins.
                                Apart from jewellery, we offers 22k (916) and 24k (995) gold coins with certification and the guarantee of a BIS Hallmarked stamp.
                            </p>
                        </div>
                        <div className="col-md-4 position-relative">
                            <div className={`${styles.imageDescription} `}>
                                <img
                                    src="assets/images/image2.png"
                                    width="481px"
                                    height="621px"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className={`${styles.space} row`}>
                    <div className="col-md-6 mt-5">
                        <img
                            src="assets/images/image3.png"
                            alt="About Us"
                            className="img-fluid mr-3"
                        />
                    </div>
                    <div className="col-md-6 mt-5">
                        <div className="col-md-12">
                            <div className="col-md-11">
                                <h1 className={`${styles.gallerytxt1}`}>Accurately crafted just</h1>
                                <h2 className={`${styles.gallerytxt1} `}> the way you <span className={`${styles.gallerytxt}`} >wanted.</span></h2>
                                <p className={`${styles.txtcolor1} mt-5`}>We always find ways to show our affection to our loved ones. Making a special moment even more special needs a
                                    unique gift. Whatever may be the occasion, a birthday, an engagement, a marriage, an anniversary or any other
                                    special day, a gift should bring a smile on your partner's face. And what makes them smile the most?
                                    I am sure it is jewellery.
                                </p>

                            </div>
                            <div className="col-md-1"></div>
                        </div>
                        <div className="col-md-12 mt-4">
                            <div className="row">
                                <div className="col-md-8">
                                    <p className={`${styles.txtcolor1}`}>
                                        In this fast moving world we don’t have enough time to keep hoping around from one showroom to another showroom to find a suitable jewellery for a relevant occasion. You neither get the benefit of the entire range as it won’t be feasible.
                                    </p>
                                </div>
                                <div className="col-md-4">
                                    <img
                                        src="assets/images/image4.png"
                                        alt="About Us"
                                        className="img-fluid mr-3"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default description