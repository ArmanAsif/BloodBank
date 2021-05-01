import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import SideBar from "../components/SideBar";
import Email from "../components/Email";
import Paginate from "../components/Paginate";
import { postDetailsById } from "../actions/postActions";
import { getAllUsers } from "../actions/userActions";

function CalculateDays(user) {
  const lastDonationDate = user.donationDate;
  var monthDiff = new Date(lastDonationDate).getTime() - new Date().getTime();
  var days = Math.abs(Math.floor(monthDiff / (1000 * 60 * 60 * 24)));

  return days > 93 ? true : isNaN(days) ? true : false;
}

var EMAIL = "";

function SetEmails(email) {
  EMAIL = EMAIL + email + ",";
  return true;
}

const EmailScreen = ({ history, match }) => {
  const [pageNumber, setPageNumber] = useState(0);
  const postPerPage = 8;
  const pagesVisited = pageNumber * postPerPage;

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userList = useSelector((state) => state.userList);
  const { users } = userList;

  const postDetails = useSelector((state) => state.postDetails);
  const { post } = postDetails;

  useEffect(() => {
    if (!userInfo) {
      history.push("/");
    } else {
      dispatch(postDetailsById(match.params.id));
      dispatch(getAllUsers());
    }
  }, [userInfo, dispatch, history, match]);

  const newUsers =
    users &&
    post &&
    users.filter(
      (user) =>
        user._id !== post.user._id &&
        user.bloodGroup === post.requestBloodGroup &&
        user.address === post.user.address
    );

  const pageCount = newUsers && Math.ceil(newUsers.length / postPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const submitHandler = () => {
    const subject = `Requested Blood Group Is Matched With Yours.`;
    const body = `We hope, You can manage time to donate. Please, visit BLOOD BANK for further information.`;
    window.open(`mailto:${EMAIL}?subject=${subject}&body=${body}`, "_self");
  };

  return (
    <div className="main">
      <SideBar />
      <div className="container">
        <div className="email">
          <h2>Nearest Address Users</h2>
          <button
            type="submit"
            className="cardButton"
            onClick={(e) => submitHandler()}
          >
            Send EMAIL To All
          </button>
        </div>
        {newUsers &&
          newUsers
            .slice(pagesVisited, pagesVisited + postPerPage)
            .map((user) => {
              return (
                CalculateDays(user) &&
                SetEmails(user.email) && (
                  <Email key={user._id} user={user} post={post} />
                )
              );
            })}

        <div className="paginate">
          <Paginate pageCount={pageCount} changePage={changePage} />
        </div>
      </div>
    </div>
  );
};

export default EmailScreen;
