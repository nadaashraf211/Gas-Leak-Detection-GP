import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Login = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [loginData, setLoginData] = useState({
    userMail: "",
    userPassword: "",
  });
  const navigate = useNavigate();

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
      console.log(loginData.userMail);
      console.log(loginData.userPassword);
      const url = `${baseurl}?${queryParams}`;
      fetch(url, {
        method: "GET",
        credentials: "include",
      })
        .then((response) => {
          if (!response.ok) {
            console.log(response);
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          console.log(data);
          if (data.Login) {
            console.log("Logged in successfully");
            navigate("/profile");
            window.location.reload();
            setIsLoggedIn(true);
          } else {
            const err = data.text;
            console.log(err);
            console.log("not Logged in");
            throw new Error("Data is incorrect");
          }
        });
    } catch (error) {
      console.log("catch error");
      console.error("Error submitting data:", error);
    }
  };
  const handleLogout = () => {
    // Perform logout operations here
    setIsLoggedIn(false); // Update the login state
  };
  return (
    <section className="Login" id="Login">
      <div>
        {/* <Nav_bar isLoggedIn={isLoggedIn} onLogout={handleLogout} /> */}
        {/* Only show login form if not logged in
      {!isLoggedIn && (
        <LoginForm onLogin={handleSubmit} loginData={loginData} setLoginData={setLoginData} />
      )} */}
      </div>

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
