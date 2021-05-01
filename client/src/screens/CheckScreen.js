import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SideBar from "../components/SideBar";
import Card from "../components/Card";
import Paginate from "../components/Paginate";
import { getPostList } from "../actions/postActions";

const CheckScreen = ({ history }) => {
  const [pageNumber, setPageNumber] = useState(0);
  const postPerPage = 8;
  const pagesVisited = pageNumber * postPerPage;

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const postList = useSelector((state) => state.postList);
  const { loading, posts } = postList;

  const checkAdmin = true;

  useEffect(() => {
    if (!userInfo) {
      history.push("/");
    } else {
      dispatch(getPostList());
    }
  }, [userInfo, history, dispatch]);

  posts &&
    posts.sort((a, b) => b.user.numberOfDonation - a.user.numberOfDonation);

  const newPosts =
    posts && posts.filter((post) => !post.isManage && !post.isReview);

  const pageCount = posts && Math.ceil(newPosts.length / postPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="main">
      <SideBar />
      <div className="container">
        <h2>Review These Requests</h2>
        {loading && <div className="loader">Loading...</div>}
        <div className="cardContainer">
          {newPosts &&
            newPosts
              .slice(pagesVisited, pagesVisited + postPerPage)
              .map((post) => {
                return (
                  <Card post={post} key={post._id} checkAdmin={checkAdmin} />
                );
              })}
        </div>
        <div className="paginate">
          <Paginate pageCount={pageCount} changePage={changePage} />
        </div>
      </div>
    </div>
  );
};

export default CheckScreen;
