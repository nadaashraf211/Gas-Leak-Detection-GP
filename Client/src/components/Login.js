import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Nav_bar } from "./Nav_bar";

export const Login = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginData, setLoginData] = useState({
    userMail: "",
    userPassword: "",
  });
  // const navigate = useNavigate();
  useEffect(() => {
    // Initialize or check authentication status here
  }, []);

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
      const response = await fetch(url);
      const data = await response.json();

      if (data.Login) {
        console.log("Logged in successfully");
        // navigate('/profile', { state: { loginSuccessful: true } });
        // useEffect(() => {

        //   const userLoggedIn =data.Login;
        //   setIsLoggedIn(userLoggedIn);
        // }, []);
        setIsLoggedIn(true);
      } else {
        const err = data.text;
        console.log(err);
        console.log("not Logged in");
        throw new Error("Data is incorrect");
      }
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
