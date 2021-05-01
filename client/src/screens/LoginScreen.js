import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/userActions";
import { getPostList } from "../actions/postActions";

const LoginScreen = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      dispatch(getPostList());
      history.push("/home");
    }
  }, [history, userInfo, dispatch]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <div className="signin">
      <h1>Please Sign In With Your Account To Proceed Further</h1>
      <div className="form">
        <h3>Sign In</h3>
        <form className="formMain" onSubmit={submitHandler}>
          <label>Enter Email:</label>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Enter Password:</label>
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="submitButton">
            Sign In
          </button>
          
          <div className="formFooter">
            <p>New Customer?</p>
            <Link to={"/register"} className="formFooterLink">
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;

