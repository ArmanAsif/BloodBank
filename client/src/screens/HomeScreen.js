import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import SideBar from "../components/SideBar";
import Card from "../components/Card";
import Paginate from "../components/Paginate";
import { getPostList } from "../actions/postActions";

const HomeScreen = ({ history }) => {
  const [pageNumber, setPageNumber] = useState(0);
  const postPerPage = 8;
  const pagesVisited = pageNumber * postPerPage;

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const postList = useSelector((state) => state.postList);
  const { loading, posts } = postList;

  const postManage = useSelector((state) => state.postManage);
  const { success } = postManage;

  useEffect(() => {
    if (!userInfo) {
      history.push("/");
    } else {
      dispatch(getPostList());
    }
    if (success) {
      history.push("/home");
    }
  }, [userInfo, history, dispatch, success]);

  posts &&
    posts.sort((a, b) => b.user.numberOfDonation - a.user.numberOfDonation);

  const newPosts =
    posts &&
    posts.filter(
      (post) =>
        userInfo &&
        !post.isManage &&
        post.isReview &&
        post.user._id !== userInfo._id
    );

  const pageCount = newPosts && Math.ceil(newPosts.length / postPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="main">
      <SideBar />
      <div className="container">
        <h2>Current Request List</h2>
        {loading && <div className="loader">Loading...</div>}
        <div className="cardContainer">
          {newPosts &&
            newPosts
              .slice(pagesVisited, pagesVisited + postPerPage)
              .map((post) => {
                return <Card post={post} key={post._id} />;
              })}
        </div>
        <div className="paginate">
          <Paginate pageCount={pageCount} changePage={changePage} />
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
