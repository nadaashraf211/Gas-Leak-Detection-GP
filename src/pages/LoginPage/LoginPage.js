import React, { useState } from "react";
import './login.css'
import { Login } from "../../components/Login";
import { Register } from "../../components/Register";


const LoginPage = () => {
    const [currentForm, setCurrentForm] = useState('Login');

    const toggleForm = (formName) => {
        setCurrentForm(formName);
    }

    return (
        <div className="LoginPage">
            {
                currentForm === "Login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
            }
        </div>
    );
}

export default LoginPage
