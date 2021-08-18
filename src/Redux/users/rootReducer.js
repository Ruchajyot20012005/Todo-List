import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCEESS,
  FETCH_USER_FAILURE,
  FETCH_USER_ID,
} from "./usersTypes";

export const initialState = {
  loading: false,
  users: [],
  error: "",
  userid: [],
};

const todoListReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USER_SUCCEESS:
      return {
        loading: false,
        users: action.payload,
        error: "",
        userid: [],
      };
    case FETCH_USER_FAILURE:
      return {
        loading: false,
        users: [],
        error: action.payload,
        userid: [],
      };
    case FETCH_USER_ID:
      return {
        ...state,
        userid: action.payload,
      };
    default:
      return state;
  }
};

export default todoListReducer;
