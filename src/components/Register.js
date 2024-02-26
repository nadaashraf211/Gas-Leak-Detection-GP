import React, { useState } from "react";

export const Register = (props) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [gender, setGender] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can now access all the form fields and their values here
        console.log({
            firstName,
            lastName,
            email,
            phone,
            birthdate,
            gender,
            password
        });
    }

    return (
        <section className="register" id="register">
            <div className="auth-form-container">
                <h2 className="reg">Register</h2>
                <form className="register-form" onSubmit={handleSubmit}>
                    <label htmlFor="firstName">First Name</label>
                    <input value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text" placeholder="First Name" id="firstName" name="firstName" />

                    <label htmlFor="lastName">Last Name</label>
                    <input value={lastName} onChange={(e) => setLastName(e.target.value)} type="text" placeholder="Last Name" id="lastName" name="lastName" />

                    <label htmlFor="email">Email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="YourEmail@gmail.com" id="email" name="email" />

                    <label htmlFor="phone">Phone</label>
                    <input value={phone} onChange={(e) => setPhone(e.target.value)} type="tel" placeholder="Phone Number" id="phone" name="phone" />

                    <label htmlFor="birthdate">Birthdate</label>
                    <input value={birthdate} onChange={(e) => setBirthdate(e.target.value)} type="date" id="birthdate" name="birthdate" />

                    <label htmlFor="gender">Gender</label>
                    <div className="gender-radio">
                        <div>
                            <input
                                type="radio"
                                id="male"
                                name="gender"
                                value="male"
                                checked={gender === "male"}
                                onChange={() => setGender("male")}
                            />
                            <label htmlFor="male">Male</label>
                        </div>
                        <div>
                            <input
                                type="radio"
                                id="female"
                                name="gender"
                                value="female"
                                checked={gender === "female"}
                                onChange={() => setGender("female")}
                            />
                            <label htmlFor="female">Female</label>
                        </div>
                        <div>
                        </div>

                    </div>

                    <label htmlFor="password">Password</label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password" />

                    <button className="sub" type="submit">Register</button>
                </form>
                <button className="link-btn" onClick={() => props.onFormSwitch('Login')}>Already have an account? Login here.</button>
            </div>
        </section>
    );
}
