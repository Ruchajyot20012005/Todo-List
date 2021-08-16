import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCEESS,
  FETCH_USER_FAILURE,
  FETCH_USERI_REQUEST,
  FETCH_USERI_SUCCEESS,
  FETCH_USERI_FAILURE,
} from "./usersTypes";

export const initialState = {
  loading: false,
  users: [],
  usersi: [],
  error: "",
  errori: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERI_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USER_SUCCEESS:
      return {
        loading: false,
        users: action.payload,
        error: "",
      };
    case FETCH_USERI_SUCCEESS:
      return {
        loading: false,
        usersi: action.payload,
        errori: "",
      };
    case FETCH_USER_FAILURE:
      return {
        loading: false,
        users: [],
        error: action.payload,
      };
    case FETCH_USERI_FAILURE:
      return {
        loading: false,
        usersi: [],
        errori: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
