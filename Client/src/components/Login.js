import React, { useState } from "react";

export const Login = (props) => {
  const [loginData, setLoginData] = useState({
    userMail: "",
    userPassword: "",
  });

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const baseurl = new URL("http://localhost:9000/api/v1/users/login");
      const queryParams = new URLSearchParams({
        userMail: loginData.userMail,
        userPassword: loginData.userPassword,
      });
      const url = `${baseurl}?${queryParams}`;
      const response = await fetch(url);
      const data = await response.json();
      if (data.Login) {
        console.log("Logged in successfully");
        setTimeout(() => {
          props.onFormSwitch("Login");
        }, 500);
      } else {
        const err = data.text;
        console.log(err);
        throw new Error("Data is incorrect");
      }
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };
  return (
    <section className="Login" id="Login">
      <div className="auth-form-container">
        <h2 className="reg">Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            value={loginData.userMail}
            onChange={handleChange}
            type="email"
            placeholder="Youremail@gmail.com"
            id="email"
            name="userMail"
          />
          <label htmlFor="password">Password</label>
          <input
            value={loginData.userPassword}
            onChange={handleChange}
            type="password"
            placeholder="********"
            id="Password"
            name="userPassword"
          />
          <button className="sub" type="submit">
            Log In
          </button>
        </form>
        <button
          className="link-btn"
          onClick={() => props.onFormSwitch("register")}
        >
          Don't have an account? Register here.
        </button>
      </div>
    </section>
  );
};
