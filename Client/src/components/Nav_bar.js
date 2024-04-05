import { useState, useEffect,useContext } from "react";
import { Navbar, Nav, Container, Dropdown } from "react-bootstrap";
import logo from "../assets/images/logo.png";
import { BrowserRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from "../pages/LoginPage/LoginPage";
import { useLocation } from 'react-router-dom';
// import { AuthContext } from '../pages/LoginPage/LoginPage';

export const Nav_bar = ({ isLoggedIn, onLogout }) => {
    const [activeLink, setActiveLink] = useState("");
    const [scrolled, setScrolled] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);

// If loginSuccessful is not set or is set to null, set it to true

    const location = useLocation();
  const { loginSuccessful } = location.state || { loginSuccessful: false };
  

  
    // const { isLoggedIn } = useContext(AuthContext);
    // const style1 = ( { isActive }) => {
    //     return {
    //         color : isActive ? "#005490" : "#fff" ,
    //         fontSize : isActive ? "32px" : "28px",
    //         textDecoration : isActive ? "none" : "underline",
    //         fontWeight : isActive ? "bold" : "normal"
    //     }
    // }

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
        setShowDropdown(false); // Close the dropdown when clicking on a link
    };

    return (
        
        <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="/">
                    <img className="logo" src={logo} alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link
                            href="/home"
                            className={activeLink === "home" ? "active navbar-link" : "navbar-link"}
                            onClick={() => onUpdateActiveLink("home")}
                        >
                            Home
                        </Nav.Link>
                        <Nav.Link
                            href="/about"
                            className={activeLink === "About" ? "active navbar-link" : "navbar-link"}
                            onClick={() => onUpdateActiveLink("About")}

                        >
                            Overview
                         </Nav.Link>
                         {loginSuccessful &&  <Dropdown className="serve"
                            show={showDropdown}
                            onMouseEnter={() => setShowDropdown(true)}
                            onMouseLeave={() => setShowDropdown(false)}
                        >
                            <Dropdown.Toggle
                                href="#Services"
                                className={activeLink === "Services" ? "active navbar-link" : "navbar-link"}
                            >
                                Services
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="/services/sensor">Sensor</Dropdown.Item>
                                <Dropdown.Item href="/services/thermalImage">Thermal Camera</Dropdown.Item>
                                <Dropdown.Item href="/services/fusion">Fusion</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>}
                        {loginSuccessful && <Nav.Link
                            href="/profile"
                            className={activeLink === "Profile" ? "active navbar-link" : "navbar-link"}
                            onClick={() => onUpdateActiveLink("Profile")}
                        >
                            Dashboard 
                        </Nav.Link>}
                      {!loginSuccessful && <Nav.Link
                            href="/login"
                            className={activeLink === "Login" ? "active navbar-link" : "navbar-link"}
                            onClick={() => onUpdateActiveLink("Login")}
                        >
                            Login
                        </Nav.Link>}
                     
                        {/* <Nav.Link
                                href="#Register"
                                className={activeLink === "Register" ? "active navbar-link" : "navbar-link"}
                                onClick={() => onUpdateActiveLink("Register")}
                            >
                                Register
                            </Nav.Link> */}
                        <Nav.Link
                            href="/contact"
                            className={activeLink === "Contact" ? "active navbar-link" : "navbar-link"}
                            onClick={() => onUpdateActiveLink("Contact")}

                        >
                            Contact
                        </Nav.Link>
                        {loginSuccessful && <Nav.Link
                            href="/login"
                            className={activeLink === "Login" ? "active navbar-link" : "navbar-link"}
                            onClick={() => 
                                {
                                    onUpdateActiveLink("Login")
                                    loginSuccessful=false
                                }}

                        >
                            Logout
                        </Nav.Link>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        

    );
};
