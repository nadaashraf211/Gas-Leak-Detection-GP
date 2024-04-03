import React, { useEffect } from "react";
import Sensor from "../../components/Sensor";
import axios from "axios";
import "./Sensor.css";

import FooterPage from "../FooterPage/FooterPage";

const SensorPage = () => {
  return (
    <div>
      <Sensor />
      <FooterPage />
    </div>
  );
};
export default SensorPage;
