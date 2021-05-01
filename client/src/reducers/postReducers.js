import {
  POST_LIST_REQUEST,
  POST_LIST_SUCCESS,
  POST_LIST_FAIL,
  POST_CREATE_REQUEST,
  POST_CREATE_SUCCESS,
  POST_CREATE_FAIL,
  POST_CREATE_RESET,
  POST_DETAILS_REQUEST,
  POST_DETAILS_SUCCESS,
  POST_DETAILS_FAIL,
  POST_DONATION_DATE_REQUEST,
  POST_DONATION_DATE_SUCCESS,
  POST_DONATION_DATE_FAIL,
  POST_DONATION_DATE_RESET,
  POST_MANAGE_REQUEST,
  POST_MANAGE_SUCCESS,
  POST_MANAGE_FAIL,
  POST_MANAGE_RESET,
} from "../constants/postConstants";

export const postListReducer = (state = { posts: [] }, action) => {
  switch (action.type) {
    case POST_LIST_REQUEST:
      return { loading: true, posts: [] };
    case POST_LIST_SUCCESS:
      return { loading: false, posts: action.payload };
    case POST_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const postCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case POST_CREATE_REQUEST:
      return { loading: true }
    case POST_CREATE_SUCCESS:
      return { loading: false, success: true, post: action.payload }
    case POST_CREATE_FAIL:
      return { loading: false, error: action.payload }
    case POST_CREATE_RESET:
      return {}
    default:
      return state
  }
};

export const postDetailsReducer = (state = { post: {} }, action) => {
  switch (action.type) {
    case POST_DETAILS_REQUEST:
      return { ...state, loading: true }
    case POST_DETAILS_SUCCESS:
      return { loading: false, post: action.payload }
    case POST_DETAILS_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const postDonationDateReducer = (state = {}, action) => {
  switch (action.type) {
    case POST_DONATION_DATE_REQUEST:
      return { loading: true, };
    case POST_DONATION_DATE_SUCCESS:
      return { loading: false, success: true, };
    case POST_DONATION_DATE_FAIL:
      return { loading: false, error: action.payload, };
    case POST_DONATION_DATE_RESET:
      return {};
    default:
      return state;
  }
};

export const postManageReducer = (state = {}, action) => {
  switch (action.type) {
    case POST_MANAGE_REQUEST:
      return { loading: true, };
    case POST_MANAGE_SUCCESS:
      return { loading: false, success: true, };
    case POST_MANAGE_FAIL:
      return { loading: false, error: action.payload, };
    case POST_MANAGE_RESET:
      return {};
    default:
      return state;
  }
};
