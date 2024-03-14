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
            <div class="breadcrumb-section breadcrumb-bg">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8 offset-lg-2 text-center">
                            <div class="breadcrumb-text">
                                <h1>Contact us</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div class="contact-from-section mt-150 mb-150"> */}
		<div class="container  mt-150 mb-150">
			<div class="row">       
            <div class="col-lg-8">
            <div id="form_status"></div>
					<div class="contact-form">
						<form type="POST" id="fruitkha-contact" onSubmit="return valid_datas( this );">
							<p>
							<input value={formData.name}
                            onChange={handleChange}
                            required
                             type="text" placeholder="Full Name"
                              name="name" id="name" />

							<input type="email" 
                            placeholder="Youremail@gmail.com" 
                            name="email" id="email" 
                            value={formData.email}
                            onChange={handleChange}
                            required/>
							</p>
							<p>
								<input type="tel" placeholder="Phone" name="phone" id="phone" />
								<input type="text" placeholder="Subject" name="subject" id="subject" />
							</p>
							<p><textarea name="message" 
                            id="message" cols="30" 
                            rows="10" 
                            value={formData.message}
                            onChange={handleChange}
                            required
                            placeholder="Message"></textarea></p>
							<input type="hidden" name="token" value="FsWga4&@f6aw" />
							<button className="sub" type="submit">Submit</button>
						</form>
					</div>
				</div>
				<div class="col-lg-4">
					<div class="contact-form-wrap">
						<div class="contact-form-box">
							<h4><i class="fas fa-map"></i> Address</h4>
							<p>34/8, East Hukupara <br /> Gifirtok, Sadan. <br /> Egypt</p>
						</div>
						<div class="contact-form-box">
							<h4><i class="fas fa-address-book"></i> Contact</h4>
							<p>Phone: +00 111 222 3333 <br /> Email: GasDetection@gmail.com</p>
						</div>
					</div>
				</div>
                </div>
            
            </div>
            {/* </div> */}
        </section>
    );
};

export default ContactUs;
