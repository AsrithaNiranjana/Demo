import React, { useState } from "react";
// import "./App.css"
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const Form = ({ onSubmit }) => {
  const obj = {
    firstName: "",
    lastName: "",
    userName: "",
    selectUser: "",
    password: "",
    phonenumber: "",
    email: "",
    selected: "Yes",
    enddate: "",
    startdate: "",
    street: "",
    town: "",
    city: "",
    state: "",
    zip: "",
    selectCountry: "",
  };
  const users = ["Select User Type", "Doctor", "HouseUsr", "Houseadm", "Admin"];
  const countrys = [
    "select country",
    "India",
    "USA",
    "Canada",
    "Austrila",
    "New Zealand",
    "China",
    "Europe",
    "Paris",
    "Finland",
    "Russia",
    "Iran",
    "Bangladesh",
  ];
  const [formData, setFormData] = useState(obj);
  const {
    firstName,
    lastName,
    userName,
    password,
    user,
    selected,
    phonenumber,
    email,
    street,
    enddate,
    startdate,
    city,
    state,
    zip,
    country,
  } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const submitChange = (e) => {
    e.preventDefault();
    console.log(formData);
    onSubmit(formData);
  };

  return (
    <div className="bg-teal-300	 flex flex-col justify-between w-max	float-right	max-w-lg	p-24 mx-auto	 my-auto	 border-solid border-2 border-indigo-600	">
      <form onSubmit={submitChange}>
        <h2>New User Registration</h2>
        <br />
        <label>FullName*</label>
        <div className="flex flex-row	justify-evenly	items-center	m-10 p-5	">
          <div>
            <input
              type="text"
              value={firstName}
              name="firstName"
              onChange={handleChange}
              placeholder="First Name"
              required
            />
          </div>
          <div>
            <input
              className="input"
              type="text"
              name="lastName"
              value={lastName}
              onChange={handleChange}
              placeholder="Last Name"
              required
            />
          </div>
        </div>

        <label>User details</label>

        <div className="flex flex-row	justify-evenly	items-center	m-31 p-6">
          <div className="">
            <input
              className="input"
              type="text"
              name="userName"
              value={userName}
              onChange={handleChange}
              placeholder="Enter User Name"
              required
            />
          </div>
          <div className="inner-item">
            <input
              className="input"
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              placeholder="Enter Password"
              required
            />
          </div>
        </div>
        <div className="flex flex-row	justify-evenly	items-center	m-31 p-6">
          <div>
            <label>PhoneNumber:</label>
            <br />

            <PhoneInput
              placeholder="Enter phone number"
              value={phonenumber}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  phonenumber: e,
                });
              }}
            />
          </div>
          <div className="inner-item">
            <label>Email -Id:</label>
            <input
              className="input"
              type="text"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="ex:email@gmail.com"
              required
            />
          </div>
        </div>
        <div className="flex flex-row	justify-evenly	items-center	m-31 p-6">
          <div className="inner-item">
            <label>User Type</label>
            <select
              value={user}
              name="selectUser"
              onChange={handleChange}
              placeholder="Select User Type"
              required
            >
              {users.map((opt, index) => (
                <option key={index} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
          <label>Active:</label>
          <div className="inner-item">
            <label>Yes</label>
            <input
              type="radio"
              name="selected"
              value="Yes"
              checked={selected === "Yes"}
              onChange={handleChange}
            />
            <label>no</label>
            <input
              type="radio"
              name="selected"
              value="no"
              checked={selected === "no"}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex flex-row	justify-evenly	items-center	m-31 p-6">
          <div className="inner-item">
            <label>StartDate</label>
            <input
              className="inner-item"
              type="date"
              value={startdate}
              name="startdate"
              onChange={handleChange}
            />
          </div>
          <div className="inner-item">
            <label>EndDate</label>
            <input
              className="inner-item"
              type="date"
              value={enddate}
              name="enddate"
              onChange={handleChange}
            />
          </div>
        </div>
        <label>Adress:</label>
        <div className="flex flex-row	justify-evenly	items-center	m-31 p-6">
          <div className="inner-item">
            <textarea
              cols={20}
              rows={2}
              name="street"
              value={street}
              onChange={handleChange}
              placeholder="Street Adress"
              required
            ></textarea>
          </div>
        </div>
        <div className="flex flex-row	justify-evenly	items-center	m-31 p-6">
          <label>City:</label>
          <div className="inner-item">
            <input
              type="text"
              value={city}
              name="city"
              onChange={handleChange}
              placeholder="Enter city Name"
              required
            />
          </div>
          <div className="inner-item">
            <label>State /Province:</label>
            <input
              type="text"
              value={state}
              name="state"
              onChange={handleChange}
              placeholder=" Enter state"
              required
            />
          </div>
        </div>
        <div className="flex flex-row	justify-evenly	items-center	m-31 p-6">
          <label>Postal / Zip Code</label>
          <div className="inner-item">
            <input
              type="text"
              value={zip}
              name="zip"
              onChange={handleChange}
              placeholder=" Enter Zip code"
              required
            />
          </div>
          <label>Country:</label>
          <div className="inner-item">
            <select
              value={country}
              name="selectCountry"
              onChange={handleChange}
              placeholder=" Select Country"
              required
            >
              {countrys.map((options, index) => (
                <option key={index} value={options}>
                  {options}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="submit">
          <input className="submit" type="submit" />
        </div>
      </form>
    </div>
  );
};
export default Form;
