import 'bootstrap/dist/css/bootstrap.min.css';  //npm install bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import sensor from "../assets/images/sensor.jpeg";


const Sensor = () => {

    return (
        <section className="Sensor" id="Sensor">
            <div className="Sensor">
                <div className='container mt-3 '>
                    <div className='row '>
                        <h1 className='senH '>Leakage Detection By Sensor</h1>
                    </div>
                    <div className=' row vh-50 align-items-center'>
                        <div className="data col-sm-6 ">
                            <p className='sensText'> Please input your sensor measurments <br />to detect leakage with best accuaracy</p>
                            {/* <label for="inputExample">Example Input</label> */}
                            <input type="text" className="form-control form-control-lg" id="inputExample" placeholder="Enter Sensor measurments"></input>
                            {/* <button type="button" className="btn1 btn btn-outline-dark align-items-center">Submit</button> */}
                            <p><input className='submit' type="submit" value="Submit" /></p>
                        </div>
                        <div className=" col-sm-6 p-3 ">
                            <img src={sensor} id='imgStyle' className=" rounded img-fluid d-block" alt="..." />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Sensor;