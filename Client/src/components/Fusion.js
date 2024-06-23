import "bootstrap/dist/css/bootstrap.min.css"; //npm install bootstrap
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import ThermaImage from "../assets/images/fusion.jpeg";
import dataAnalysis from "../assets/images/dataAnalysis.png";
import effeciency from "../assets/images/effeciency.png";
import sensetivity from "../assets/images/sensetivity.png";
import verified from "../assets/images/verified.png";
import React, { useState } from "react";

const Fusion = () => {
  const [image, setImage] = useState(null);
  const [output, setOutput] = useState(null);
  const [isFileSelected, setIsFileSelected] = useState(false);
  const [sensorData, setSensorData] = useState({
    f1: "",
    f2: "",
    f3: "",
    f4: "",
    f5: "",
    f6: "",
    f7: "",
  });

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setIsFileSelected(true);
    setImage(selectedImage);
  };
  const handleChange = (e) => {
    setSensorData({
      ...sensorData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("1", sensorData.f1);
    formData.append("2", sensorData.f2);
    formData.append("3", sensorData.f3);
    formData.append("4", sensorData.f4);
    formData.append("5", sensorData.f5);
    formData.append("6", sensorData.f6);
    formData.append("7", sensorData.f7);

    formData.append("image", image);

    try {
      const response = await fetch("http://127.0.0.1:5000/fusion", {
        method: "POST",
        body: formData,
      });
      if (!response.ok) {
        const err = await response.text();
        console.log(err);
        throw new Error("Failed to submit data");
      }
      const x = await response.text();
      const class_map = {
        0: "Mixture",
        1: "No Gas",
        2: "Perfume",
        3: "Smoke",
      };
      console.log(class_map[x[1]]);
      setOutput(class_map[x[1]]);
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  return (
    <section className="Fusion" id="Fusion">
      <div class="breadcrumb-section breadcrumb-bg">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 offset-lg-2 text-center">
              <div class="breadcrumb-text">
                <h1>Fusion System</h1>
                <p className="ser-text">
                  In addition to our hardware and software solutions, We offers
                  a full suite of services that support your leak monitoring and
                  detection goals with the best accuracy to save life and
                  enviroment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Fusion">
        <div className="container mt-3">
          <div className=" row vh-50 justify-content-center ">
            <div className="data col-sm-6 ">
              <h2 className="sensor-h2">Fusion Model: </h2>
              <p className="sensor-p">
                {" "}
                The fusion of detection technologies provides a powerful tool
                for industries where gas leaks pose a significant risk,
                including petrochemical plants, natural gas facilities, and
                manufacturing plants that use or produce gases in their
                processes.
              </p>
              <div className="row">
                <div className="col-sm-1">
                  <img src={dataAnalysis} alt="Logo" className="sensor-logo" />
                </div>
                <div className="sensor-text col-sm-2">
                  <p>Data Analysis:</p>
                  <p className="logo-text">
                    Data from both the thermal camera and gas sensors can be
                    analyzed together for a more accurate assessment of the
                    leak, including the leak rate, the type of gas, and the
                    potential risks it poses.{" "}
                  </p>
                </div>
                <div className="col-sm-1">
                  <img src={effeciency} alt="Logo" className="sensor-logo" />
                </div>
                <div className="sensor-text col-sm-2">
                  <p>Operational Efficiency:</p>
                  <p className="logo-text">
                    The fusion system can operate remotely, reducing the need
                    for personnel to enter potentially hazardous areas. It can
                    provide real-time monitoring and immediate alerts if a leak
                    is detected.{" "}
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-1">
                  <img src={sensetivity} alt="Logo" className="sensor-logo" />
                </div>
                <div className="sensor-text col-sm-2">
                  <p>Increased Sensitivity:</p>
                  <p className="logo-text">
                    While a thermal camera may have limitations in terms of the
                    concentration of gas it can detect, gas sensors can pick up
                    lower concentrations, providing early detection of leaks.
                  </p>
                </div>
                <div className="col-sm-1">
                  <img src={verified} alt="Logo" className="sensor-logo" />
                </div>
                <div className="sensor-text col-sm-2">
                  <p>Dual Verification: </p>
                  <p className="logo-text">
                    The thermal camera can visually identify the area of the
                    leak, while the gas sensor can verify the presence of the
                    gas and its concentration.
                  </p>
                </div>
              </div>
            </div>

            <div className=" col-sm-6 p-3 ">
              <img
                src={ThermaImage}
                id="imgStyle"
                className=" rounded img-fluid d-block"
                alt="..."
              />
            </div>
          </div>

          <div className="data col-sm-12 align-items-center">
            <p className="sensText">
              {" "}
              Please input your ThermalImage and sensor measurments to detect
              leakage with best accuaracy:{" "}
            </p>
            {/* <label for="inputExample">Example Input</label> */}
            <form onSubmit={handleSubmit}>
              {/* <input type="text" className="form-control form-control-lg" id="inputExample" placeholder="Enter sensor measurements"></input> */}
              <p className="sdata">sensor measurments: </p>
              <div className="row measure">
                <div className="col-sm-3 p-3">
                  <input
                    value={sensorData.f1}
                    onChange={handleChange}
                    type="number"
                    className="form-control form-control-lg"
                    id="f1"
                    placeholder="MQ2"
                    name="f1"
                  ></input>
                </div>
                <div className="col-sm-3 p-3">
                  <input
                    value={sensorData.f2}
                    onChange={handleChange}
                    type="number"
                    className="form-control form-control-lg"
                    id="f2"
                    placeholder="MQ3"
                    name="f2"
                  ></input>
                </div>
                <div className="col-sm-3 p-3">
                  <input
                    value={sensorData.f3}
                    onChange={handleChange}
                    type="number"
                    className="form-control form-control-lg"
                    id="f3"
                    placeholder="MQ5"
                    name="f3"
                  ></input>
                </div>

                <div className="col-sm-3 p-3">
                  <input
                    value={sensorData.f4}
                    onChange={handleChange}
                    type="number"
                    className="form-control form-control-lg"
                    id="f4"
                    placeholder="MQ6"
                    name="f4"
                  ></input>
                </div>
              </div>
              <div className="row measure">
                <div className="col-sm-4 p-3">
                  <input
                    value={sensorData.f5}
                    onChange={handleChange}
                    type="number"
                    className="form-control form-control-lg"
                    id="f5"
                    placeholder="MQ7"
                    name="f5"
                  ></input>
                </div>
                <div className="col-sm-4 p-3">
                  <input
                    value={sensorData.f6}
                    onChange={handleChange}
                    type="number"
                    className="form-control form-control-lg"
                    id="f6"
                    placeholder="MQ8"
                    name="f6"
                  ></input>
                </div>
                <div className="col-sm-4 p-3">
                  <input
                    value={sensorData.f7}
                    onChange={handleChange}
                    type="number"
                    className="form-control form-control-lg"
                    id="f7"
                    placeholder="MQ135"
                    name="f7"
                  ></input>
                </div>
              </div>

              <p className="sdata">thermal image: </p>
              <div className="custom-file-input">
                <label for="fileInput">Choose file</label>
                <input
                  id="fileInput"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                />
                {isFileSelected && (
                  <p className="filetext">File successfully selected!</p>
                )}
              </div>
              {output && (
                <div className="alert alert-success" role="alert">
                  {output}
                </div>
              )}
              <button className="sub" type="submit">
                Submit all
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fusion;
