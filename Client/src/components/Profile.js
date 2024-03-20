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
import Room from './Room';
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const x=useNavigate()
    const [components, setComponents] = useState([]);
    const [counter, setCounter] = useState(2);

    const handleAddRoom = () => {
        setCounter(counter + 1);
        setComponents([...components, <Room key={counter} counter={counter} />]);
    };
    const [numCamera, setNumCamera] = useState(8);
    const [numSensor, setNumSensor] = useState(8);
    
    let numActive=5;
    let alert=2;
    let room=1;
    const addcamera = () =>  {  
        setNumCamera(prevNum => prevNum + 1);
    };
    const addsensor = () =>  {  
        setNumSensor(prevNum => prevNum + 1);
    };
    return (
        <section className="Profile" id="Profile">
            <div class="breadcrumb-section breadcrumb-bg">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8 offset-lg-2 text-center">
                            <div class="breadcrumb-text">
                                <h1>Dashboard</h1>
                                <p className='ser-text'>Be aware of your Gas Leakage Remotely with best accuaracy for your safety.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <div className='Profile'>

        <div class="container-fluid text-center">    
  <div class="row content">
  <div class="Rooms col-sm-3 sidenav mx-auto">
    <h2>Room {room}</h2>
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
  <div className='row>'>
  {components.map(component => component)}
            <button className="sub1" onClick={handleAddRoom} type="submit">ADD Room</button>
            </div>
            <div className='row>'>
            <button className="sub1" onClick={()=>x("/login")} type="submit">Logout</button>
            </div>
            
</div>





        </div>
        </section>
    )
}
export default Profile;