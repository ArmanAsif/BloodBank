import React from "react";

const Email = ({ user, post }) => {
  var {name, email, bloodGroup, address} = user;
  var {alternateMobile, time, donationDate} = post;

  const submitHandler = (user) => {
    const subject = `${name}, Requested Blood Group "${bloodGroup}" Is Matched With Yours.`;
    const body = `We Hope, You Can Manage Time To Donate, For Further Information - Phone No: ${alternateMobile}, Address: ${address}, Time: ${time}, Date: ${donationDate}`;
    window.open(`mailto:${email}?subject=${subject}&body=${body}`,"_self");
  };

  return (
    <div className="card" key={user._id}>
      <div className="cardTop">{user.bloodGroup}</div>
      <div className="cardBottom">
        <p>
          <i className="fa fa-user faGreenColor"></i>
          {user && user.name}
        </p>
        <p>
          <i className="fa fa-map-marker faGreenColor"></i>
          {user.address}
        </p>
        <p>
          <i className="fa fa-phone faGreenColor"></i>
          {user.mobile}
        </p>
        <p>
          {user.donationDate ? (
            <i className="fa fa-clock-o faGreenColor"></i>
          ) : (
            <i className="fa fa-times faNotReview"></i>
          )}
          {user.donationDate ? user.donationDate : "Not Donated Yet"}
        </p>
        <button
          type="submit"
          className="cardButton"
          onClick={(e) => submitHandler(user)}
        >
          Send EMAIL
        </button>
      </div>
    </div>
  );
};

export default Email;
