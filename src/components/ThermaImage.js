import 'bootstrap/dist/css/bootstrap.min.css';  //npm install bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ThermaImage from "../assets/images/thermalCamera.png";
import environmental from "../assets/images/enviromental.png";
import emergency from "../assets/images/emergency.png";
import industry from "../assets/images/industry.png";
import sector from "../assets/images/sector.png";
import React, { useState } from 'react';


const ThermalImage = () => {
    const [image, setImage] = useState(null);

    const handleImageChange = (e) => {
        const selectedImage = e.target.files[0];
        setImage(selectedImage);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle image submission logic here, such as sending the image to a server
        console.log("Submitted image:", image);
    };

    return (
        <section className="Thermal" id="Thermal">
            <div class="breadcrumb-section breadcrumb-bg">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8 offset-lg-2 text-center">
                            <div class="breadcrumb-text">
                                <h1>Our Services</h1>
                                <p className='ser-text'>In addition to our hardware and software solutions,
                                    We offers a full suite of services that support your leak monitoring and detection goals with the best accuracy to save life and enviroment.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Thermal">
                <div className='container mt-3'>


                    <div className=' row vh-50 '>
                        <div className="data col-sm-6 ">
                            <h2 className='sensor-h2'>Thermal Camera Detection: </h2>
                            <p className='sensor-p'> Using thermal cameras for gas leak detection can be a safer approach in the environment,
                                It allows for quick identification of problem areas from a distance, enabling timely and targeted actions to address leaks.</p>
                            <div className='row'>
                                <div className='col-sm-1'>
                                    <img src={industry} alt="Logo" className="sensor-logo" />
                                </div>
                                <div className='sensor-text col-sm-2'>
                                    <p>Industrial Safety:</p>
                                    <p className='logo-text'>
                                        Detecting gas leaks in chemical plants, refineries, gas pipelines, and other industrial settings to prevent explosions, fires, and other industrial accidents.
                                    </p>
                                </div>
                                <div className='col-sm-1'>
                                    <img src={sector} alt="Logo" className="sensor-logo" />
                                </div>
                                <div className='sensor-text col-sm-2'>
                                    <p>Gas Sector::</p>
                                    <p className='logo-text'>
                                        Inspecting oil pipelines, storage tanks, and natural gas distribution networks for leaks to prevent
                                        product loss and environmental contamination. </p>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-sm-1'>
                                    <img src={emergency} alt="Logo" className="sensor-logo" />
                                </div>
                                <div className='sensor-text col-sm-2'>
                                    <p>Emergency Response: :</p>
                                    <p className='logo-text'>
                                        Fast and effective emergency response plans are crucial for dealing
                                        with gas leaks to minimize health risks and environmental impact.
                                    </p>
                                </div>
                                <div className='col-sm-1'>
                                    <img src={environmental} alt="Logo" className="sensor-logo" />
                                </div>
                                <div className='sensor-text col-sm-2'>
                                    <p>Environmental Monitoring:</p>
                                    <p className='logo-text'>
                                        Identifying and quantifying gas emissions to monitor environmental pollution and ensure compliance with environmental regulations
                                    </p>
                                </div>
                            </div>

                        </div>
                        <div className=" col-sm-5 p-3 ">
                            <img src={ThermaImage} id='imgStyle' className="rounded img-fluid d-block" alt="..." />
                        </div>
                    </div>



                    <div className="data col-sm-12">
                        <p className='sensText'> Please input your Thermal Image to detect leakage with best accuaracy : </p>
                        {/* <label for="inputExample">Example Input</label> */}
                        <form onSubmit={handleSubmit}>
                            <input className='file-input' type="file" accept="image/*" onChange={handleImageChange} />
                            <button className="sub" type="submit">Upload</button>
                            {/* <input className='upload' type="submit" value="Upload" /> */}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ThermalImage;