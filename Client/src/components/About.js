// About.js

import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import about1 from "../assets/images/about1.jpg";
import thermal from "../assets/images/thermal.jpg";
import about3 from "../assets/images/about3.jpg";
import sensor from "../assets/images/sensor.jpg";
import overview from "../assets/images/overview.jpeg";
import boy from "../assets/images/boy.jpeg";
import girl from "../assets/images/girl.jpeg";
import seif from "../assets/images/seif.jpeg";
import bahaa from "../assets/images/bahaa.jpg";
import nadaa from "../assets/images/nada1.jpeg";
import nabila from "../assets/images/nabila.jpg";
import nada from "../assets/images/nada.jpeg";
import sohaila from "../assets/images/sohaila.jpeg";


import FooterPage from "../pages/FooterPage/FooterPage";

const About = () => {
    const imageStyle = {
        maxWidth: '90%',
        height:'400px',
        opacity: 0.7,
        // height: 'auto',
        marginBottom: 0, // Set margin bottom to zero
    };

    return (
        <section className="About" id="About">
            <div class="breadcrumb-section breadcrumb-bg">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8 offset-lg-2 text-center">
                            <div class="breadcrumb-text">
                                <h1>OVERVIEW</h1>
                                <p className='ser-text'>
                                    Here's what we are
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container mt-3">

                <div class="row">
                    <div class="over-text col-sm-4 p-3 ">
                        <h1>We're taking action for the planet</h1>
                    </div>
                    <div class="over-p col-sm-8 p-3 ">
                        <p>gas leak detection is a vital tool in promoting environmental sustainability. It helps in the reduction of greenhouse gases,
                            conservation of natural resources, protection of ecosystems, improvement of air quality, and prevention of environmental disasters.
                            By ensuring that gas leaks are detected and addressed promptly,
                            we can make significant strides towards a more sustainable and environmentally friendly future.</p>
                    </div>
                    <hr className='line' />
                </div>
                <div className="row">
                    <h4 className="over-h">The effect of early detection on sustainability.. </h4>
                    <div className="col-sm-8">
                        <div class="row">

                            <div class="number col-sm-3 p-3 ">
                                <div class="checkmark-circle">
                                    <i class="checkmark">1</i>
                                </div>
                            </div>
                            <div class="over-data col-sm-9 p-3 ">
                                <p>
                                    Mitigation of Climate Change:
                                </p>
                                <p className="over-p">Detecting and addressing gas leaks, particularly of methane and other greenhouse gases,
                                    is crucial in the fight against climate change. Methane is a potent greenhouse gas that contributes significantly to global warming.
                                    By promptly identifying and fixing leaks, we can reduce the amount of these gases released into the atmosphere,
                                    thereby mitigating their impact on climate change.</p>
                            </div>
                        </div>


                        <div class="row">
                            <div class="number col-sm-3 p-3 ">
                                <div class="checkmark-circle">
                                    <i class="checkmark">2</i>
                                </div>
                            </div>
                            <div class="over-data col-sm-9 p-3 ">
                                <p>
                                Improvement of Air Quality: 
                                </p>
                                <p className="over-p"> Many gases that leak into the atmosphere contribute to air pollution,
                                 which can have significant health impacts on humans and animals. By detecting and fixing these leaks,
                                 we contribute to improving air quality, which is a critical aspect of a sustainable environment.</p>
                            </div>         
                        </div>

                        <div class="row">
                            <div class="number col-sm-3 p-3 ">
                                <div class="checkmark-circle">
                                    <i class="checkmark">3</i>
                                </div>
                            </div>
                            <div class="over-data col-sm-9 p-3 ">
                                <p>
                                Risk Reduction and Safety Improvement:
                                </p>
                                <p className="over-p"> Gas leaks pose significant risks, including the potential for explosions and fires.
                                 These events can lead to environmental catastrophes, causing long-term damage to the environment. 
                                Detecting leaks early helps in preventing such disasters, thereby protecting the environment.</p>
                            </div>         
                        </div>

                    </div>


                    <div class="over-img col-sm-4 p-3 ">
                    <img src={overview} id='imgStyle' className="rounded img-fluid d-block" alt="..." />
                    </div>
                </div>
                <hr className='line' />

            </div>



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
                                        <h5 className="text-black">Fires and Combustions</h5>
                                        <p className="text-black">Which leads to the death of many victims.</p>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src={about1} className="d-block w-100 carousel-image" alt="..." style={imageStyle} />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5 className="text-black">Gas leaks disasters!</h5>
                                        <p className="text-black">Leaks can lead to massive explosions, poisoning, and suffocation.</p>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src={thermal} className="d-block w-100 carousel-image" alt="..." style={imageStyle} />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5 className="text-black">Thermal Camera</h5>
                                        <p className="text-black"> To avoid these dangers, We can detect the leakage using thermal cameras</p>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src={sensor} className="d-block w-100 carousel-image" alt="..." style={imageStyle} />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5 className="text-black">Sensor</h5>
                                        <p className="text-black">We can also detect the leakage using sensors</p>
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
                    <hr className='line' />
                </div>
            </div>
            

            <div class="container text-center center-container ">
                <h1 className="team">Our Team </h1>
  <div className="info row"> 

  <div className="col-sm-6 p-3">
  <div class="card" style={{width: '200px'}}>
    <img class="card-img-top" src={seif} alt="Card image" style={{width: '100%', height:'250px'}} />
    <div class="card-body">
      <h4 class="card-title">Seif Amr</h4>
      {/* <p class="card-text">Some example text some example text.</p> */}
      <a href="http://www.linkedin.com/in/seif-amr-7a6529211" class="btn">See Profile</a>
    </div>
  </div>
  <br />
  </div>
  <div className="col-sm-6 p-3">
  <div class="card" style={{width: '200px'}}>
    <img class="card-img-top" src={bahaa} alt="Card image" style={{width: '100%', height:'250px'}} />
    <div class="card-body">
      <h4 class="card-title">Ahmed Bahaa</h4>
      {/* <p class="card-text">Some example text some example text.</p> */}
      <a href="https://www.linkedin.com/in/ahmed-bahaa-76b811220/" class="btn">See Profile</a>
    </div>
  </div>
  <br />
  </div>
  
  </div>
  <div className="row"> 

  <div className="col-sm-3 p-3">
  <div class="card" style={{width: '200px'}}>
    <img class="card-img-top" src={nadaa} alt="Card image" style={{width: '100%', height:'250px'}} />
    <div class="card-body">
      <h4 class="card-title">Nada Ashraf</h4>
      {/* <p class="card-text">Some example text some example text. </p> */}
      <a href="https://www.linkedin.com/in/nada-ashraf-024797219" class="btn">See Profile</a>
    </div>
  </div>
  <br />
  </div>
  <div className="col-sm-3 p-3">
  <div class="card" style={{width: '200px'}}>
    <img class="card-img-top" src={nabila} alt="Card image" style={{width: '100%', height:'250px'}} />
    <div class="card-body">
      <h4 class="card-title">Nabila Wael</h4>
      {/* <p class="card-text">Some example text some example text</p> */}
      <a href="https://www.linkedin.com/in/nabila-wael-46176023b" class="btn">See Profile</a>
    </div>
  </div>
  <br />
  </div>
  <div className="col-sm-3 p-3">
  <div class="card" style={{width: '200px'}}>
    <img class="card-img-top" src={nada} alt="Card image" style={{width: '100%', height:'250px'}} />
    <div class="card-body">
      <h4 class="card-title">Nada Saeed</h4>
      {/* <p class="card-text">Some example text some example text. </p> */}
      <a href="#" class="btn">See Profile</a>
    </div>
  </div>
  <br />
  </div>
  <div className="col-sm-3 p-3">
  <div class="card" style={{width: '200px'}}>
    <img class="card-img-top" src={sohaila} alt="Card image" style={{width: '100%', height:'250px'}} />
    <div class="card-body">
      <h4 class="card-title">Sohaila Rady</h4>
      {/* <p class="card-text">Some example text some example text. </p> */}
      <a href="https://www.linkedin.com/in/sohaila-abdelnasser/" class="btn">See Profile</a>
    </div>
  </div>
  <br />
  </div>
  </div>
  </div>

        </section>

    );
};

export default About;
