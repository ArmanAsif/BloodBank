import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  userLoginReducer,
  userRegisterReducer,
  usersReviewReducer,
  acceptPostReducer,
  addReviewReducer,
  userListReducer,
} from "./reducers/userReducers";
import {
  postListReducer,
  postCreateReducer,
  postDetailsReducer,
  postDonationDateReducer,
  postManageReducer,
} from "./reducers/postReducers";

const reducer = combineReducers({
  postManage: postManageReducer,
  postDonationDate: postDonationDateReducer,
  postDetails: postDetailsReducer,
  postCreate: postCreateReducer,
  postList: postListReducer,

  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  acceptPost: acceptPostReducer,
  addReview: addReviewReducer,
  usersReview: usersReviewReducer,
  userList: userListReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = { userLogin: { userInfo: userInfoFromStorage } };

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
