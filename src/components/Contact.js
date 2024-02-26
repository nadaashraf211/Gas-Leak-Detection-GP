import React, { useState } from "react";

const ContactUs = () => {
    // State to manage form inputs
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform actions with form data (e.g., send to server)
        console.log("Form submitted:", formData);
        // Clear form fields after submission
        setFormData({
            name: "",
            email: "",
            message: "",
        });
    };

    return (
        <section className="contact" id="contact">
            <div className="contact-us-container">
                <h2 className="reg">Contact Us</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Enter your name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="Youremail@gmail.com"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            placeholder="How can we help you?"
                        ></textarea>
                    </div>
                    <button className="sub" type="submit">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default ContactUs;
