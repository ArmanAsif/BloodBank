import axios from "axios";
import {
  POST_LIST_REQUEST,
  POST_LIST_SUCCESS,
  POST_LIST_FAIL,
  POST_CREATE_REQUEST,
  POST_CREATE_SUCCESS,
  POST_CREATE_FAIL,
  POST_DETAILS_REQUEST,
  POST_DETAILS_SUCCESS,
  POST_DETAILS_FAIL,
  POST_DONATION_DATE_REQUEST,
  POST_DONATION_DATE_SUCCESS,
  POST_DONATION_DATE_FAIL,
  POST_MANAGE_REQUEST,
  POST_MANAGE_SUCCESS,
  POST_MANAGE_FAIL,
} from "../constants/postConstants";

export const getPostList = () => async (dispatch, getState) => {
  try {
    dispatch({ type: POST_LIST_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/posts`, config);

    dispatch({
      type: POST_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: POST_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createPost = (
  alternateMobile,
  relationship,
  requestBloodGroup,
  time
) => async (dispatch, getState) => {
  try {
    dispatch({
      type: POST_CREATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(
      "/api/posts",
      { alternateMobile, relationship, requestBloodGroup, time },
      config
    );

    dispatch({
      type: POST_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: POST_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const postDetailsById = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: POST_DETAILS_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/posts/${id}`, config);

    dispatch({
      type: POST_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: POST_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const checkDonationDate = (id, donationDate) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({
      type: POST_DONATION_DATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(
      `/api/posts/${id}/review`,
      { donationDate },
      config
    );

    dispatch({
      type: POST_DONATION_DATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: POST_DONATION_DATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const postManageRequest = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: POST_MANAGE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(`/api/posts/${id}/manage`, {}, config);

    dispatch({
      type: POST_MANAGE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: POST_MANAGE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
