import {
  FETCH_USERS_SUCCESS,
  GET_USERS,
  UPDATE_USERS,
  ADD_USERS,
  STATE_USERS
} from "../../Users/userTypes";
const initialState = {
  loading: false,
  error: "",
  users: [],
};
// @ts-ignore
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_SUCCESS:
      return {
        loading: false,
        users: action.payload,
        error: "",
      };
      case STATE_USERS:
        return { ...state, users: action.payload }  
    case GET_USERS:
      return { ...state, users: action.payload }  
    case UPDATE_USERS:
      return { ...state, users: action.payload }
      case ADD_USERS:
      return { ...state, users: action.payload }
    default:
      return state;
  }
};
export default reducer;