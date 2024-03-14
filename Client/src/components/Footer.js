import React from 'react';
import logo from "../assets/images/logo.png";

const Footer = () => {
    return (
        <footer className="footer text-light text-center py-3">
            <div className="container">
                <div className="footer-content">
                    <div className="logo-container">
                        <img src={logo} alt="Logo" className="logo" />
                    </div>
                    <p>&copy; 2024 GasLeak. All rights reserved.</p>
                    <div className="social-icons">
                        <a href="https://www.linkedin.com/in/nada-ashraf-45990624b" target="_blank" rel="noopener noreferrer" className="text-light me-2">
                            <i className="bi bi-linkedin"></i>
                        </a>
                        <a href="https://www.facebook.com/nadda.ashraaf" target="_blank" rel="noopener noreferrer" className="text-light me-2">
                            <i className="bi bi-facebook"></i>
                        </a>
                        <a href="https://www.instagram.com/nadaashraff211/" target="_blank" rel="noopener noreferrer" className="text-light">
                            <i className="bi bi-instagram"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
