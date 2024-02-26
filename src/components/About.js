// About.js

import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import about1 from "../assets/images/about1.jpg";
import thermal from "../assets/images/thermal.jpg";
import about3 from "../assets/images/about3.jpg";
import sensor from "../assets/images/sensor.jpg";

import FooterPage from "../pages/FooterPage/FooterPage";

const About = () => {
    const imageStyle = {
        maxWidth: '100%',
        height: 'auto',
        marginBottom: 0, // Set margin bottom to zero
    };

    return (
        <section className="About" id="About">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 mx-auto">
                        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={about3} className="d-block w-100 carousel-image" alt="..." style={imageStyle} />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5 className="text-white">Fires and Combustions</h5>
                                        <p className="text-white">Which leads to the death of many victims.</p>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src={about1} className="d-block w-100 carousel-image" alt="..." style={imageStyle} />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5 className="text-white">Gas leaks disasters!</h5>
                                        <p className="text-white">Leaks can lead to massive explosions, poisoning, and suffocation.</p>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src={thermal} className="d-block w-100 carousel-image" alt="..." style={imageStyle} />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5 className="text-white">Thermal Camera</h5>
                                        <p className="text-white"> To avoid these dangers, We can detect the leakage using thermal cameras</p>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src={sensor} className="d-block w-100 carousel-image" alt="..." style={imageStyle} />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5 className="text-white">Sensor</h5>
                                        <p className="text-white">We can also detect the leakage using sensors</p>
                                    </div>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <FooterPage />
        </section>

    );
};

export default About;
