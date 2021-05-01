import {
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_LIST_FAIL,
  USER_LIST_RESET,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REVIEW_REQUEST,
  USER_REVIEW_SUCCESS,
  USER_REVIEW_FAIL,
  USER_REVIEW_RESET,
  USER_REVIEW_ADD_REQUEST,
  USER_REVIEW_ADD_SUCCESS,
  USER_REVIEW_ADD_FAIL,
  USER_REVIEW_ADD_RESET,
  USER_ACCEPT_REQUEST,
  USER_ACCEPT_SUCCESS,
  USER_ACCEPT_FAIL,
  USER_ACCEPT_RESET,
} from "../constants/userConstants";

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true };
    case USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true };
    case USER_REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const acceptPostReducer = (state = { }, action) => {
  switch (action.type) {
    case USER_ACCEPT_REQUEST:
      return { loading: true };
    case USER_ACCEPT_SUCCESS:
      return { loading: false, successAccept: true, userInfo: action.payload };
    case USER_ACCEPT_FAIL:
      return { loading: false, error: action.payload };
    case USER_ACCEPT_RESET:
      return { };
    default:
      return state;
  }
};

export const usersReviewReducer = (state = { reviews: [] }, action) => {
  switch (action.type) {
    case USER_REVIEW_REQUEST:
      return { loading: true };
    case USER_REVIEW_SUCCESS:
      return { loading: false, success: true, reviews: action.payload };
    case USER_REVIEW_FAIL:
      return { loading: false, error: action.payload };
    case USER_REVIEW_RESET:
      return { reviews: [] };
    default:
      return state;
  }
};

export const addReviewReducer = (state = { }, action) => {
  switch (action.type) {
    case USER_REVIEW_ADD_REQUEST:
      return { loading: true };
    case USER_REVIEW_ADD_SUCCESS:
      return { loading: false, successReview: true, userInfo: action.payload };
    case USER_REVIEW_ADD_FAIL:
      return { loading: false, error: action.payload };
    case USER_REVIEW_ADD_RESET:
      return { };
    default:
      return state;
  }
};

export const userListReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case USER_LIST_REQUEST:
      return { loading: true };
    case USER_LIST_SUCCESS:
      return { loading: false, users: action.payload };
    case USER_LIST_FAIL:
      return { loading: false, error: action.payload };
    case USER_LIST_RESET:
      return { users: [] };
    default:
      return state;
  }
};







