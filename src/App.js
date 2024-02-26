import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Contact from "./components/Contact";
import { Nav_bar } from "./components/Nav_bar";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage"
// import Footer from './pages/FooterPage/FooterPage';
// import Services from "./components/Services";
import './App.css';
import FooterPage from "./pages/FooterPage/FooterPage";
import SensorPage from "./pages/SensorPage/SensorPage";
import ContactUsPage from "./pages/ContactUsPage/ContactUsPage";
import ThermalPage from "./pages/ThermalPage/ThermalPage";
import FusionPage from "./pages/FusionPage/FusionPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import SuceessPage from "./pages/SucessPage/SucessPage";
import FailPage from "./pages/FailPage/FailPage";

// import Profile from "./components/Profile";
class App extends Component {
    render() {
        return (
            <Router>
                <Nav_bar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/services/sensor" element={<SensorPage />} />
                    <Route path="/services/thermalImage" element={<ThermalPage />} />
                    <Route path="/services/fusion" element={<FusionPage />} />
                    <Route path="/footer" element={<FooterPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="*" element={<h2> Page Not Found </h2>} />
                    <Route path="/contact" element={<ContactUsPage />} />
                </Routes>


            </Router>

        );
    }
}
export default App;