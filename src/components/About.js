import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';  //npm install bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JavaScript with Carousel support
import about1 from "../assets/images/about1.jpg";
import thermal from "../assets/images/thermal.jpg";
import about3 from "../assets/images/about3.jpg";
import sensor from "../assets/images/sensor.jpg";


const About = () => {
    const imageStyle = {
        width: '800px',
        height: '600px',
        objectFit: 'cover',
        borderRadius: '10px',

    };

    return (
        <section className="About" id="About">
            <div className="About">
                <div className="container d-flex justify-content-center align-items-center vh-100 ">
                    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>

                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={about1} style={imageStyle} className="d-block carousel-image" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Leaks disasters</h5>
                                    <p>Leaks can lead to massive explosions, poisoning, and suffocation.
                                    </p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={about3} style={imageStyle} className="d-block carousel-image" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Fires and Combustions!</h5>
                                    <p>Which leads to the death of many victims</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={thermal} style={imageStyle} className="d-block carousel-image" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Thermal Camera</h5>
                                    <p> To avoid these dangers, We can detect the leakage using thermal cameras</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={sensor} style={imageStyle} className="d-block carousel-image" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Sensor</h5>
                                    <p>We can also detect the leakage using sensors</p>
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
        </section>
    );
};


export default About;
