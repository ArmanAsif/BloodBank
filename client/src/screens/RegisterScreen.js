import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../actions/userActions";

const RegisterScreen = ({ location, history }) => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [religion, setReligion] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [weight, setWeight] = useState(0);
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { userInfo } = userRegister;


  useEffect(() => {
    if (userInfo) {
      history.push("/home");
    }
  }, [history, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      window.alert('Passwords Do Not Matched!')
    } else {
      dispatch(
        register(
          name,
          mobile,
          email,
          bloodGroup,
          religion,
          address,
          city,
          postalCode,
          weight,
          dateOfBirth,
          password
        )
      );
    }
  };

  return (
    <div className="signup">
      <div>
        <h1>Please Fill This Form With Your Authentic Information </h1>
        <img src="/images/registration.png" alt=""></img>
      </div>
      <div className="form">
        <h3>Sign Up</h3>
        <form className="formMain" onSubmit={submitHandler}>
          <label>Enter Name:</label>
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label>Enter Mobile Number:</label>
          <input
            type="text"
            placeholder="Ex: 01800000000"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />

          <label>Enter Email:</label>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Enter Blood Group:</label>
          <input
            type="text"
            placeholder="Ex: B-"
            value={bloodGroup}
            onChange={(e) => setBloodGroup(e.target.value)}
          />

          <label>Enter Religion:</label>
          <input
            type="text"
            placeholder="Enter Religion"
            value={religion}
            onChange={(e) => setReligion(e.target.value)}
          />

          <label>Enter Present Adress:</label>
          <input
            type="text"
            placeholder="Ex: Badda"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

          <label>Enter Present City:</label>
          <input
            type="text"
            placeholder="Enter City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />

          <label>Enter Postal Code:</label>
          <input
            type="text"
            placeholder="Enter Postal Code"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
          />

          <label>Enter Weight:</label>
          <input
            type="number"
            placeholder="Enter Weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />

          <label>Enter Date Of Birth:</label>
          <input
            type="text"
            placeholder="Ex: 1987-08-23"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
          />

          <label>Enter Password:</label>
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <label>Confirm Password:</label>
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <button type="submit" className="submitButton">
            Sign Up
          </button>
          <div className="formFooter">
            <p>Already Registered?</p>
            <Link to={"/login"} className="formFooterLink">
              Sign In
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterScreen;

