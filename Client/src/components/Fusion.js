import 'bootstrap/dist/css/bootstrap.min.css';  //npm install bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ThermaImage from "../assets/images/fusion.jpeg";
import dataAnalysis from "../assets/images/dataAnalysis.png";
import effeciency from "../assets/images/effeciency.png";
import sensetivity from "../assets/images/sensetivity.png";
import verified from "../assets/images/verified.png";
import React, { useState } from 'react';



const Fusion = () => {
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
        <section className="Fusion" id="Fusion">
             <div class="breadcrumb-section breadcrumb-bg">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8 offset-lg-2 text-center">
                            <div class="breadcrumb-text">
                                <h1>Fusion System</h1>
                                <p className='ser-text'>In addition to our hardware and software solutions,
                                    We offers a full suite of services that support your leak monitoring and detection goals with the best accuracy to save life and enviroment.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Fusion">
                <div className='container mt-3'>
                    
                    <div className=' row vh-50 justify-content-center '>

                        <div className="data col-sm-6 ">
                            <h2 className='sensor-h2'>Fusion Model: </h2>
                            <p className='sensor-p'> The fusion of detection technologies provides a powerful tool for industries where gas leaks pose a significant risk, including petrochemical plants, 
                            natural gas facilities, and manufacturing plants that use or produce gases in their processes.</p>
                            <div className='row'>
                                <div className='col-sm-1'>
                                    <img src={dataAnalysis} alt="Logo" className="sensor-logo" />
                                </div>
                                <div className='sensor-text col-sm-2'>
                                    <p>Data Analysis:</p>
                                    <p className='logo-text'>
                                    Data from both the thermal camera and gas sensors can be analyzed together for a more accurate assessment of the leak, 
                                    including the leak rate, the type of gas, and the potential risks it poses. </p>
                                </div>
                                <div className='col-sm-1'>
                                    <img src={effeciency} alt="Logo" className="sensor-logo" />
                                </div>
                                <div className='sensor-text col-sm-2'>
                                    <p>Operational Efficiency:</p>
                                    <p className='logo-text'>
                                    The fusion system can operate remotely, reducing the need for personnel to enter potentially hazardous areas.
                                     It can provide real-time monitoring and immediate alerts if a leak is detected. </p>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-sm-1'>
                                    <img src={sensetivity} alt="Logo" className="sensor-logo" />
                                </div>
                                <div className='sensor-text col-sm-2'>
                                    <p>Increased Sensitivity:</p>
                                    <p className='logo-text'>
                                    While a thermal camera may have limitations in terms of the concentration of gas it can detect,
                                     gas sensors can pick up lower concentrations, providing early detection of leaks.
                                    </p>
                                </div>
                                <div className='col-sm-1'>
                                    <img src={verified} alt="Logo" className="sensor-logo" />
                                </div>
                                <div className='sensor-text col-sm-2'>
                                    <p>Dual Verification: </p>
                                    <p className='logo-text'>
                                    The thermal camera can visually identify the area of the leak, while the gas sensor can verify the presence of the
                                     gas and its concentration.
 </p>
                                </div>
                            </div>

                        </div>



                        <div className=" col-sm-6 p-3 ">
                            <img src={ThermaImage} id='imgStyle' className=" rounded img-fluid d-block" alt="..." />
                        </div>
                    </div>

                    <div className="data col-sm-12 align-items-center">
                            <p className='sensText'> Please input your ThermalImage and sensor measurments to detect leakage with best accuaracy: </p>
                            {/* <label for="inputExample">Example Input</label> */}
                            <form onSubmit={handleSubmit}>
                                <input type="text" className="form-control form-control-lg" id="inputExample" placeholder="Enter sensor measurements"></input>
                                <input className='file-input' type="file" accept="image/*" onChange={handleImageChange} />
                                <button className="sub" type="submit">Upload the image</button>
                                <button className="sub" type="submit">Submit all</button>
                                
                            </form>
                        </div>
                </div>
            </div>
        </section>
    );
}

export default Fusion;