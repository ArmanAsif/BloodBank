import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SideBar from "../components/SideBar";
import { getUsersReview, addUserReview } from "../actions/userActions";
import Review from "../components/Review";

const ReviewScreen = ({ history }) => {
  const [feedback, setFeedback] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const usersReview = useSelector((state) => state.usersReview);
  const { success, reviews } = usersReview;

  useEffect(() => {
    if (!userInfo) {
      history.push("/");
    } else {
      dispatch(getUsersReview());
    }
  }, [userInfo, history, dispatch]);

  const submitHandler = (e) => {
    e.preventDefault();
    if(feedback){
        dispatch(addUserReview(userInfo._id, feedback))
    } else {
        window.alert('Please, Share Your Thoughts About Our Services.')
    }
  };

  return (
    <div className="main">
      <SideBar />
      <div className="container review">
        <div className="form">
          <h3>Feedback Form</h3>
          <form className="formMain" onSubmit={submitHandler}>
            <label className="formLabelSize">Give Your Opinion:</label>
            <textarea
              type="text"
              rows="5"
              cols="50"
              placeholder={
                userInfo &&
                userInfo.feedback
                  ? userInfo.feedback
                  : "Give Your Valuable Opinion And Help Us To Improve"
              }
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
            />

            <button type="submit" className="submitButton greenColor">
              Submit Review
            </button>
          </form>
        </div>

        <div className="form">
          <h3>Users Feedback</h3>
          {success && reviews.map((review) => {
            return (
              review.feedback && <Review review={review} key={review.index} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ReviewScreen;
