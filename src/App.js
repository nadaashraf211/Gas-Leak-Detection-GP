import React, { Component } from "react";
// import Contact from "./components/Contact";
import { Nav_bar } from "./components/Nav_bar";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage"
// import Footer from './pages/FooterPage/FooterPage';

// import Services from "./components/Services";
import './App.css';
import FooterPage from "./pages/FooterPage/FooterPage";

// import Profile from "./components/Profile";
class App extends Component {
    render() {
        return (
            <div>
                <Nav_bar />
                <HomePage />
                <LoginPage />
                {/* <FooterPage /> */}
            </div>

        );
    }
}
export default App;