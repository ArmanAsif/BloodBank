import React from "react";

const Review = ({review}) => {
  return (
    <form className="formMain">
      <label className="formLabelSize">{review.name && review.name}</label>
      <textarea
        type="text"
        rows="1"
        cols="50"
        placeholder={review.feedback && review.feedback}
        disabled={true}
      />
    </form>
  );
};

export default Review;
