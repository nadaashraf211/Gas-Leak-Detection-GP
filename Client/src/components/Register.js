import React, { useState } from "react";

import { useEffect } from "react";
import SuceessPage from "../pages/SucessPage/SucessPage";
import FailLogin from "../pages/SucessPage/FailLogin";

export const Register = (props) => {
  const [formData, setFormData] = useState({
    userFirstName: "",
    userLastName: "",
    userMail: "",
    userPhone: "",
    userBirthday: "",
    userGender: "",
    userPassword: "",
  });
  // const [successCard, setSuccessCard] = useState(false);
  // const [errorCard, setErrorCard] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:9000/api/v1/users/save", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        const err = await response.text();
        console.log(err);
        throw new Error("Failed to submit data");
      }
      console.log("Data submitted successfully");
      setSuccessMessage(
        "Account Created Successfully! please login your account."
      );
      setErrorMessage(null);
      setTimeout(() => {
        props.onFormSwitch("Login"); // Switch to the login form after 5 seconds
      }, 3000);
    } catch (error) {
      console.error("Error submitting data:", error);
      setErrorMessage("There was an error submitting your data.");
      setSuccessMessage(null);
    }
  };

  // useEffect(() => {
  //   if (successCard) {
  //     window.open('/sucessLogin', '_blank');
  //   }
  //   if (errorCard) {
  //     window.open('/failLogin', '_blank');

  //   }
  // }, [successCard, errorCard]);

  return (
    <section className="register" id="register">
      <div className="auth-form-container">
        <h2 className="reg">Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
          <label htmlFor="firstName">First Name</label>
          <input
            value={formData.userFirstName}
            onChange={handleChange}
            type="text"
            placeholder="First Name"
            id="firstName"
            name="userFirstName"
          />

          <label htmlFor="lastName">Last Name</label>
          <input
            value={formData.userLastName}
            onChange={handleChange}
            type="text"
            placeholder="Last Name"
            id="lastName"
            name="userLastName"
          />

          <label htmlFor="email">Email</label>
          <input
            value={formData.userMail}
            onChange={handleChange}
            type="email"
            placeholder="YourEmail@gmail.com"
            id="email"
            name="userMail"
          />

          <label htmlFor="phone">Phone</label>
          <input
            value={formData.userPhone}
            onChange={handleChange}
            type="tel"
            placeholder="Phone Number"
            id="phone"
            name="userPhone"
          />

          <label htmlFor="birthdate">Birthdate</label>
          <input
            value={formData.userBirthday}
            onChange={handleChange}
            type="date"
            id="birthdate"
            name="userBirthday"
          />

          <label htmlFor="gender">Gender</label>
          <div className="gender-radio">
            <div>
              <input
                type="radio"
                id="male"
                name="userGender"
                value="m"
                checked={formData.userGender === "m"}
                onChange={handleChange}
              />
              <label htmlFor="male">Male</label>
            </div>
            <div>
              <input
                type="radio"
                id="female"
                name="userGender"
                value="f"
                checked={formData.userGender === "f"}
                onChange={handleChange}
              />
              <label htmlFor="female">Female</label>
            </div>
            <div></div>
          </div>

          <label htmlFor="password">Password</label>
          <input
            value={formData.userPassword}
            onChange={handleChange}
            type="password"
            placeholder="********"
            id="password"
            name="userPassword"
          />
          {successMessage && (
            <div className="alert alert-success" role="alert">
              {successMessage}
              {/* <button className="sub" type="button" onClick={() => props.onFormSwitch("Login")} >OK</button>    */}
            </div>
          )}
          {errorMessage && (
            <div className="alert alert-danger" role="alert">
              {errorMessage}
              <button className="sub" onClick={() => setErrorMessage(null)}>
                Retry
              </button>
            </div>
          )}
          <button className="sub" type="submit">
            Register
          </button>
        </form>

        <button
          className="link-btn"
          onClick={() => props.onFormSwitch("Login")}
        >
          Already have an account? Login here.
        </button>
      </div>
    </section>
  );
};
