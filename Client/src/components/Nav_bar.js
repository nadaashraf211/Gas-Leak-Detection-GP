import { useState, useEffect, useContext } from "react";
import { Navbar, Nav, Container, Dropdown } from "react-bootstrap";
import logo from "../assets/images/logo.png";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginPage from "../pages/LoginPage/LoginPage";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { AuthContext } from '../pages/LoginPage/LoginPage';

export const Nav_bar = () => {
  let x;
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  let loginSuccessful;
  const [activeLink, setActiveLink] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const handlelogin = () => {
    setIsLoggedIn(true); 
  };
  const handlelogout = () => {
    setIsLoggedIn(false); 
  };
  // If loginSuccessful is not set or is set to null, set it to true
  // const location = useLocation();
  // const navigate = useNavigate();

  function check() {
    return new Promise((resolve, reject) => {
      const url = new URL("http://localhost:9000/api/v1/users/");
      fetch(url, {
        method: "GET",
        credentials: "include",
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          if (data.valid) {
            x = true;
            handlelogin();
            console.log("True");
            resolve(true);
          } else {
            console.log("false");
            x = false;
            handlelogout();
            resolve(false);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  check().then((res) => {
    loginSuccessful = { loginSuccessful: res };
    console.log(loginSuccessful);
  });
  console.log(loginSuccessful);

  const logout = async () => {
    const url = new URL("http://localhost:9000/api/v1/users/logout");
    fetch(url, {
      method: "GET",
      credentials: "include",
    }).then((response) => {
      if (!response.ok) {
        throw new Error("Can't Delete Session");
      } else {
        handlelogout();
        console.log("logged outtttt");
        console.log(response);
      }
    });
  };
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
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="/about"
              className={
                activeLink === "About" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("About")}
            >
              Overview
            </Nav.Link>
            {isLoggedIn && (
              <Dropdown
                className="serve"
                show={showDropdown}
                onMouseEnter={() => setShowDropdown(true)}
                onMouseLeave={() => setShowDropdown(false)}
              >
                <Dropdown.Toggle
                  href="#Services"
                  className={
                    activeLink === "Services"
                      ? "active navbar-link"
                      : "navbar-link"
                  }
                >
                  Services
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="/services/sensor">Sensor</Dropdown.Item>
                  <Dropdown.Item href="/services/thermalImage">
                    Thermal Camera
                  </Dropdown.Item>
                  <Dropdown.Item href="/services/fusion">Fusion</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            )}
            {isLoggedIn === true ?
              <Nav.Link
                href="/profile"
                className={
                  activeLink === "Profile"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("Profile")}
              >
                Dashboard
              </Nav.Link>:<></>
            }
            {!isLoggedIn && (
              <Nav.Link
                href="/login"
                className={
                  activeLink === "Login" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("Login")}
              >
                Login
              </Nav.Link>
            )}
            {/* <Nav.Link
                                href="#Register"
                                className={activeLink === "Register" ? "active navbar-link" : "navbar-link"}
                                onClick={() => onUpdateActiveLink("Register")}
                            >
                                Register
                            </Nav.Link> */}
            <Nav.Link
              href="/contact"
              className={
                activeLink === "Contact" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("Contact")}
            >
              Contact
            </Nav.Link>
            {isLoggedIn && (
              <Nav.Link
                href="/login"
                className={
                  activeLink === "Login" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => {
                  logout();
                  onUpdateActiveLink("Login");
                  
                }}
              >
                Logout
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
