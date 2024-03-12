import 'bootstrap/dist/css/bootstrap.min.css';  //npm install bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React from "react";
import Camera from "../assets/images/camera.png";
import gas from "../assets/images/gas.png";
import active from "../assets/images/activeCamera.png";
import Alert from "../assets/images/alert.png";
import addCamera from "../assets/images/addPhoto.png";
import addSensor from "../assets/images/addSensor.png";
import { useState } from 'react';




const Room = ({ counter }) => {
    const [numCamera, setNumCamera] = useState(0);
    const [numSensor, setNumSensor] = useState(0);
    
    let numActive=0;
    let alert=0;
    // let room=2;
    const addcamera = () =>  {  
        setNumCamera(prevNum => prevNum + 1);
    };
    const addsensor = () =>  {  
        setNumSensor(prevNum => prevNum + 1);
    };
    return (
        <section className="Room" id="Room">
        <div>

        <div class="container-fluid text-center">    
  <div class="row content">
  <div class="Rooms col-sm-3 sidenav mx-auto">
    <h2>Room {counter}</h2>
    <div class='row'>
        <div class='logo col-sm-12'>
            <img src={Camera} alt="Logo" className="sensor-logo" />
            <p>{numCamera}</p>
        </div>
    </div>
    <div class='row'>
        <div class='logo col-sm-12'>
            <img src={gas} alt="Logo" className="sensor-logo" />
            <p>{numSensor}</p>
        </div>
    </div>
</div>



<div class="history col-sm-6 text-center "> 
      <div class='row'>
        <div class='logo col-sm-6'>
        
        <div class="d-flex justify-content-center align-items-center">
        <p className='history-text'>Active Camera:</p>
            <img src={active} alt="Logo" className="active-logo" />
            <p>{numActive}</p>
            </div>
        </div>
        <div class='logo col-sm-6'>
        
        <div class="d-flex justify-content-center align-items-center">
        <p className='history-text'>Number of Alerts:</p>
            <img src={Alert} alt="Logo" className="active-logo" />
            <p>{alert}</p>
            </div>
        </div>
        
    </div>
      <h />   
    </div>
    <div class="Rooms col-sm-3 sidenav">
    <div class="d-flex justify-content-center align-items-center">
    <button className="sub" onClick={addcamera} type="submit">ADD Camera <img src={addCamera} alt="Logo" className="camera-logo" />
    </button>
            
            </div>
            <div class="d-flex justify-content-center align-items-center">
            <button className="sub" onClick={addsensor} type="submit">ADD Sensor
            <img src={addSensor} alt="Logo" className="camera-logo" />
            </button>
            </div>
    </div>
  </div>
  <hr className='line' />
</div>

        </div>
        </section>
    )
}
export default Room;