import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { email, password } = formData;
  const changeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    localStorage.setItem("auth", true);
    navigate("/");
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="item">
          <h1>Login</h1>
        </div>
        <div className="item">
          <div className="inner-item">
		  <input
            placeholder="Type Your Email"
            name="email"
            value={email}
            type="email"
            onChange={changeHandler}
			required
          />
		  </div>
        </div>
        <div className="item">
          <input
            placeholder="Enter Your Password"
            name="password"
            value={password}
            type="password"
            onChange={changeHandler}
			required
          />
        </div>
        <div className="button">
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};
export default Login;
