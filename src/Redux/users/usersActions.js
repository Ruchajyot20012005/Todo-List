import axios from "axios";
import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCEESS,
  FETCH_USER_FAILURE,
  FETCH_USERI_REQUEST,
  FETCH_USERI_SUCCEESS,
  FETCH_USERI_FAILURE,
} from "./usersTypes";

export const fetchUserReuest = () => {
  return {
    type: FETCH_USER_REQUEST,
  };
};

export const fetchUseriReuest = () => {
  return {
    type: FETCH_USERI_REQUEST,
  };
};

const fetchUserSuccess = (users) => {
  return {
    type: FETCH_USER_SUCCEESS,
    payload: users,
  };
};

const fetchUseriSuccess = (usersi) => {
  return {
    type: FETCH_USERI_SUCCEESS,
    payload: usersi,
  };
};

const fetchUserFailure = (error) => {
  return {
    type: FETCH_USERI_FAILURE,
    payload: error,
  };
};

const fetchUseriFailure = (errori) => {
  return {
    type: FETCH_USER_FAILURE,
    payload: errori,
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

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUseriReuest);
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const useri = response.data;
        dispatch(fetchUseriSuccess(useri));
      })
      .catch((errori) => {
        const errorMsg = errori.messsage;
        dispatch(fetchUseriFailure(errorMsg));
      });
  };
};
