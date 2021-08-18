import axios from "axios";
import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCEESS,
  FETCH_USER_FAILURE,
  FETCH_USER_ID,
} from "./usersTypes";

export const fetchUserReuest = () => {
  return {
    type: FETCH_USER_REQUEST,
  };
};
const fetchUserSuccess = (users) => {
  return {
    type: FETCH_USER_SUCCEESS,
    payload: users,
  };
};
const fetchUserFailure = (error) => {
  return {
    type: FETCH_USER_FAILURE,
    payload: error,
  };
};

export const fetchTodo = () => {
  return (dispatch) => {
    dispatch(fetchUserReuest);
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        const user = response.data;
        dispatch(fetchUserSuccess(user));
      })

      .catch((error) => {
        const errorMsg = error.messsage;
        dispatch(fetchUserFailure(errorMsg));
      });
  };
};

export const fetchuserId = (id) => {
  return (dispatch) => dispatch(fetchId(id));
};

export const fetchId = (id) => {
  return {
    type: FETCH_USER_ID,
    payload: id,
  };
};
