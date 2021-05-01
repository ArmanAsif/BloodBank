import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../actions/userActions";

const SideBar = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <div className="sidebar">
      <div>
        <img src="/images/profile.jpg" alt=""></img>
        <h2>{userInfo && userInfo.name}</h2>
        <p>
          {userInfo &&
            (userInfo.numberOfDonation > 0
              ? `${userInfo.numberOfDonation} Times Donated`
              : "Not Donated Yet")}
        </p>
        <p>{userInfo && userInfo.donationDate && userInfo.donationDate}</p>
      </div>
      <div>
        <Link to={"/home"} className="sidebarLink">
          <i className="fa fa-home faRedColor"></i>Home
        </Link>

        <Link to={"/profile"} className="sidebarLink">
          <i className="fa fa-user faRedColor"></i>Profile
        </Link>

        {userInfo && userInfo.isAdmin ? (
          <Link to={"/admin/check"} className="sidebarLink">
            <i className="fa fa-check-square faRedColor"></i>Review
          </Link>
        ) : (
          <Link to={"/review"} className="sidebarLink">
            <i className="fa fa-star faRedColor"></i>Review
          </Link>
        )}

        <Link to={"/request"} className="sidebarLink">
          <i className="fa fa-plus-circle faRedColor"></i>Request
        </Link>

        <button
          type="submit"
          className="sidebarLinkLogout"
          onClick={logoutHandler}
        >
          <i className="fa fa-arrow-circle-left faRedColor"></i>
          Logout
        </button>
      </div>
      <div className="sidebarFooter">
        <img src="/images/blood.png" alt=""></img>
        <h1>Blood Bank</h1>
        <p>Donate Blood. Save Life.</p>
        <i className="fa fa-facebook faRedColor faIconSize"></i>
        <i className="fa fa-twitter faRedColor faIconSize"></i>
        <i className="fa fa-instagram faRedColor faIconSize"></i>
        <i className="fa fa-linkedin faRedColor faIconSize"></i>
      </div>
    </div>
  );
};

export default SideBar;
