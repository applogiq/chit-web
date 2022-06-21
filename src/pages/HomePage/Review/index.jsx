/* ************************** Import Packages *************************** **/
import React, { useState } from 'react';
import Slider from "react-slick";

/* ************************** Import Slick CSS Packages *************************** **/
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

/* ************************** Import CSS *************************** **/
import styles from "./review.module.css";

/* ************************** Import constant *************************** **/
import { data } from "../../../constant/review"


const Review = () => {

    const [activeImage, setActiveImage] = useState(2);

    var settings5 = {
        arrows: true,
        infinite: true,
        speed: 500,
        // focusOnSelect: true,
        slidesToShow: 3,
        // slidesPerRow: 1,
        slidesToScroll: 1,
    };


    const handleactive = (key, value) => {
        if (value === 4) {
            setActiveImage(0 + 1);
        } else {
            setActiveImage(value + 2);
        } console.log(key, value, "Get actiev slider --------------->4");

    }
    return (
        <div className={` ${styles.datareview} container p-4`}>
            <div className={`${styles.space} row`}>
                <div className="col-12 text-center ">
                    <h1 className={`${styles.gallerytxt1}`}>Customer<span className={`${styles.gallerytxt}`}>&nbsp;Reviews</span></h1>
                </div>
            </div>
            <Slider
                {...settings5}
                beforeChange={(e, n) => handleactive(e, n)}
            >
                {data &&
                    data?.map((item, index) => (
                        <>
                            <div className="testimonial-data mt-4">
                                <div className={`card text-dark mb-3 ${styles.reviewwidth} ${activeImage === index + 1 ? "activeSlider" : "unactiveSlider"}`} >
                                    <div className={`${styles.color} card-body`}>
                                        <div className="col-12">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <img
                                                        src="assets/images/vectorreview.png"
                                                        alt="avatar-review"
                                                        className={`${styles.reviewimg}`}
                                                    />
                                                </div>

                                            </div>
                                        </div>
                                        <div className="col-12" style={{ height: "9rem" }}>
                                            <p className={`${styles.description} pt-3`}>{item.description}</p>
                                        </div>
                                        <div className="col-12">
                                            <p className={`${styles.name}`}>{item.contactPerson}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    ))}
            </Slider>
        </div>
    )
}

export default Review;