import { useState, useEffect } from "react";
import { Navbar, Nav, Container, Dropdown } from "react-bootstrap";
import logo from "../assets/images/logo.png";
import { BrowserRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

export const Nav_bar = () => {
    const [activeLink, setActiveLink] = useState("home");
    const [scrolled, setScrolled] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);

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
        <Router>
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
                                href="#home"
                                className={activeLink === "home" ? "active navbar-link" : "navbar-link"}
                                onClick={() => onUpdateActiveLink("home")}
                            >
                                Home
                            </Nav.Link>
                            <Nav.Link
                                href="#About"
                                className={activeLink === "About" ? "active navbar-link" : "navbar-link"}
                                onClick={() => onUpdateActiveLink("About")}
                            >
                                About
                            </Nav.Link>
                            <Dropdown className="serve"
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
                                    <Dropdown.Item href="#Sensor">Sensor</Dropdown.Item>
                                    <Dropdown.Item href="#Thermal Camera">Thermal Camera</Dropdown.Item>
                                    <Dropdown.Item href="#service3">Fusion</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Nav.Link
                                href="#Profile"
                                className={activeLink === "Profile" ? "active navbar-link" : "navbar-link"}
                                onClick={() => onUpdateActiveLink("Profile")}
                            >
                                Profile
                            </Nav.Link>
                            <Nav.Link
                                href="#Login"
                                className={activeLink === "Login" ? "active navbar-link" : "navbar-link"}
                                onClick={() => onUpdateActiveLink("Login")}
                            >
                                Login
                            </Nav.Link>
                            {/* <Nav.Link
                                href="#Register"
                                className={activeLink === "Register" ? "active navbar-link" : "navbar-link"}
                                onClick={() => onUpdateActiveLink("Register")}
                            >
                                Register
                            </Nav.Link> */}
                            <Nav.Link
                                href="#Contact"
                                className={activeLink === "Contact" ? "active navbar-link" : "navbar-link"}
                                onClick={() => onUpdateActiveLink("Contact")}
                            >
                                Contact
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Router>
    );
};
