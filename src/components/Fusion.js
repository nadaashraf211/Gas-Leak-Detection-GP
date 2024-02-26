import 'bootstrap/dist/css/bootstrap.min.css';  //npm install bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ThermaImage from "../assets/images/fusion.jpeg";
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
            <div className="Fusion">
                <div className='container mt-3'>
                    <h1 className='senH'>Fushion Model</h1>
                    <div className=' row vh-50 justify-content-center '>
                        <div className="data col-sm-6 align-items-center">
                            <p className='sensText'> Please input your ThermalImage <br />and sensor measurments <br />to detect leakage with best accuaracy</p>
                            {/* <label for="inputExample">Example Input</label> */}
                            <form onSubmit={handleSubmit}>
                                <input type="text" className="form-control form-control-lg" id="inputExample" placeholder="Enter sensor measurements"></input>
                                <input className='file-input' type="file" accept="image/*" onChange={handleImageChange} />
                                <input className='upload' type="submit" value="Upload the image" />
                                <p><input className="submit" type="submit" value="Submit all" /></p>
                            </form>
                        </div>
                        <div className=" col-sm-6 p-3 ">
                            <img src={ThermaImage} id='imgStyle' className=" rounded img-fluid d-block" alt="..." />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Fusion;