import 'bootstrap/dist/css/bootstrap.min.css';  //npm install bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import sensor from "../assets/images/sensor.jpeg";
import industrial from "../assets/images/industrial.png";
import home from "../assets/images/home.png";
import Safety from "../assets/images/safety.png";
import forest from "../assets/images/forest.png";

const Sensor = () => {

    return (
        <section className="Sensor" id="Sensor">
            <div class="breadcrumb-section breadcrumb-bg">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8 offset-lg-2 text-center">
                            <div class="breadcrumb-text">
                                <h1>Sensor System</h1>
                                <p className='ser-text'>In addition to our hardware and software solutions,
                                    We offers a full suite of services that support your leak monitoring and detection goals with the best accuracy to save life and enviroment.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Sensor">
                <div className='container mt-3 '>
                    {/* <div className='row '>
                        <h1 className='senH '>Leakage Detection By Sensor</h1>
                    </div> */}
                    <div className=' row vh-50 '>
                        <div className="data col-sm-6 ">
                            <h2 className='sensor-h2'>Sensor Detection: </h2>
                            <p className='sensor-p'> Sensors play a crucial role in gas leak detection, offering a reliable and efficient means to identify and manage gas leaks, thus preventing potential hazards and environmental damage.</p>
                           <div className='row'>
                            <div className='col-sm-1'>
                                <img src={industrial} alt="Logo" className="sensor-logo" />
                            </div>
                            <div className='sensor-text col-sm-2'>
                                <p>Industrial Safety:</p>
                                <p className='logo-text'>
                                In manufacturing plants, refineries, and chemical plants where flammable or toxic gases are used or produced.
                                </p>
                            </div>
                            <div className='col-sm-1'>
                                <img src={home} alt="Logo" className="sensor-logo" />
                            </div>
                            <div className='sensor-text col-sm-2'>
                                <p>Home Safety:</p>
                                <p className='logo-text'>
                                Detecting natural gas or carbon monoxide leaks in residential environments.
                                </p>
                            </div>
                            </div>
                            <div className='row'>
                            <div className='col-sm-1'>
                                <img src={Safety} alt="Logo" className="sensor-logo" />
                            </div>
                            <div className='sensor-text col-sm-2'>
                                <p>Mining Safety:</p>
                                <p className='logo-text'>
                                To detect harmful gases in mining operations, ensuring worker safety.       </p>
                            </div>
                            <div className='col-sm-1'>
                                <img src={forest} alt="Logo" className="sensor-logo" />
                            </div>
                            <div className='sensor-text col-sm-2'>
                                <p>Environmental Monitoring:</p>
                                <p className='logo-text'>
                                Measuring emissions and detecting leaks in oil and gas pipelines to prevent environmental pollution.                                </p>
                            </div>
                            </div>
                            
                        </div>
                        <div className="col-sm-5 p-3 ">
                            <img src={sensor} id='imgStyle' className="rounded img-fluid d-block" alt="..." />
                        </div>
                    </div>


                    <div className="data col-sm-12 ">
                        <p className='sensText'> Please input your sensor measurments to detect leakage with best accuaracy :</p>
                        {/* <label for="inputExample">Example Input</label> */}
                        <input type="text" className="form-control form-control-lg" id="inputExample" placeholder="Enter Sensor measurments"></input>
                        {/* <button type="button" className="btn1 btn btn-outline-dark align-items-center">Submit</button> */}
                        <button className="sub" type="submit">Submit</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Sensor;