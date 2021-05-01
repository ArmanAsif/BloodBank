import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SideBar from "../components/SideBar";
import {
  postDetailsById,
  checkDonationDate,
  getPostList,
} from "../actions/postActions";

const PostCheckScreen = ({ history, match }) => {
  const [donationDate, setDonationDate] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const postDetails = useSelector((state) => state.postDetails);
  const { post } = postDetails;

  useEffect(() => {
    if (!userInfo) {
      history.push("/");
    } else {
      dispatch(postDetailsById(match.params.id));
    }
  }, [userInfo, history, dispatch, match]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (donationDate) {
      dispatch(checkDonationDate(match.params.id, donationDate));
      dispatch(getPostList());
      history.push(`/admin/email/post/${match.params.id}`);
    } else {
      window.alert(`${userInfo.name}, Please Set The Donation Date Carefully!`);
    }
  };

  return (
    <div className="main">
      <SideBar />
      <div className="container post">
        <div className="form">
          <h3>{post && post.user && post.user.name} Post</h3>
          <form className="formMain" onSubmit={submitHandler}>
            <label>Mobile Number:</label>
            <input
              type="text"
              placeholder={post && post.alternateMobile}
              disabled={true}
            />

            <label>Address:</label>
            <input
              type="text"
              placeholder={post && post.user && post.user.address}
              disabled={true}
            />

            <label>Victim Blood Group:</label>
            <input
              type="text"
              placeholder={post && post.requestBloodGroup}
              disabled={true}
            />

            <label>Time:</label>
            <input
              type="text"
              placeholder={post && post.time}
              disabled={true}
            />

            <label>Set Donation Date:</label>
            <input
              type="text"
              placeholder="Ex: March 08, 2021"
              value={donationDate}
              onChange={(e) => setDonationDate(e.target.value)}
            />

            <button type="submit" className="submitButton greenColor">
              Set Donation Date
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostCheckScreen;
