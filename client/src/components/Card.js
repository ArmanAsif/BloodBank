import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { acceptRequestPost } from "../actions/userActions";
import { postManageRequest } from "../actions/postActions";


const Card = ({ post, checkAdmin }) => {
  const dispatch = useDispatch();
  
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const lastDonationDate = userInfo && userInfo.donationDate;
  var monthDiff = new Date(lastDonationDate).getTime() - new Date().getTime();
  var days = Math.abs(Math.floor(monthDiff / (1000 * 60 * 60 * 24)));

  const submitHandler = (id) => {
    if (days < 93) {
      window.alert(
        `${userInfo.name}, Appriciate Your Interest! But Still ${
          93 - days
        } Days To Go From Your Last Donation Date ${userInfo.donationDate}`
      );
    } else {
      if (
        window.confirm(
          `${userInfo.name}, Are You Sure To Accept The Donation Request?`
        )
      ) {
        dispatch(acceptRequestPost(id));
        dispatch(postManageRequest(id));
      } else {
      }
    }
  };

  return (
    <div className="card">
      <div className="cardTop">{post.requestBloodGroup}</div>
      <div className="cardBottom">
        <p>
          <i className="fa fa-user faGreenColor"></i>
          {post.user && post.user.name}
        </p>
        <p>
          <i className="fa fa-map-marker faGreenColor"></i>
          {post.user.address}
        </p>
        <p>
          <i className="fa fa-phone faGreenColor"></i>
          {post.alternateMobile}
        </p>
        <p>
          {post.donationDate ? (
            <i className="fa fa-clock-o faGreenColor"></i>
          ) : (
            <i className="fa fa-times faNotReview"></i>
          )}
          {post.donationDate ? post.donationDate : "Not Reviewed Yet"}
        </p>
        {checkAdmin ? (
          <Link
            to={`/admin/post/${post._id}`}
            className="cardButton redColor"
          >
            Review
          </Link>
        ) : (
          <button
            type="submit"
            className="cardButton"
            disabled={userInfo._id === post.user._id}
            onClick={(e) => submitHandler(post._id)}
          >
            {userInfo._id !== post.user._id
              ? "Accept"
              : post.isManage
              ? "Managed"
              : "Not Managed"}
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
