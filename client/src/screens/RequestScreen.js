import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SideBar from "../components/SideBar";
import {createPost} from '../actions/postActions'
import { getPostList } from "../actions/postActions";


const RequestScreen = ({history}) => {
  const [alternateMobile, setAlternateMobile] = useState("");
  const [relationship, setRelationship] = useState("");
  const [requestBloodGroup, setRequestBloodGroup] = useState("");
  const [time, setTime] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if(!userInfo){
      history.push('/')
    } 
  }, [userInfo, history])

  const submitHandler = (e) => {
    e.preventDefault();
    if(userInfo){
        dispatch(createPost(alternateMobile,relationship,requestBloodGroup,time))
        setAlternateMobile('');
        setRelationship('');
        setRequestBloodGroup('');
        setTime('');
        dispatch(getPostList())
        history.push('/profile')
    }
  };

  return (
    <div className="main">
      <SideBar />
      <div className="container post">
        <div className="form">
          <h3>Request Form</h3>
          <form className="formMain" onSubmit={submitHandler}>
            <label>Enter Mobile Number:</label>
            <input
              type="text"
              placeholder="Mobile Number"
              value={alternateMobile}
              onChange={(e) => setAlternateMobile(e.target.value)}
            />

            <label>Enter Relationship:</label>
            <input
              type="text"
              placeholder="Relationship"
              value={relationship}
              onChange={(e) => setRelationship(e.target.value)}
            />

            <label>Enter Patient Blood Group:</label>
            <input
              type="text"
              placeholder="Patient Blood Group"
              value={requestBloodGroup}
              onChange={(e) => setRequestBloodGroup(e.target.value)}
            />

            <label>Enter Time:</label>
            <input
              type="text"
              placeholder="Ex: 10 AM"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />

            <button type="submit" className="submitButton">
              Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RequestScreen;
