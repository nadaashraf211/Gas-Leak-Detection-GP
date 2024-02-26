import 'bootstrap/dist/css/bootstrap.min.css';  //npm install bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ThermaImage from "../assets/images/theerml.jpeg";
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
            <div className="Thermal">
                <div className='container mt-3'>
                    <h1 className='senH'>Leakage Detection By Thermal Image</h1>
                    <div className=' row vh-50 justify-content-center '>
                        <div className="data col-sm-6 align-items-center">
                            <p className='sensText'> Please input your Thermal Image <br />to detect leakage with best accuaracy</p>
                            {/* <label for="inputExample">Example Input</label> */}
                            <form onSubmit={handleSubmit}>
                                <input className='file-input' type="file" accept="image/*" onChange={handleImageChange} />

                                <input className='upload' type="submit" value="Upload" />
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

export default ThermalImage;