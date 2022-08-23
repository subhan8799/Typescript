import {
  FETCH_USERS_SUCCESS,
  GET_USERS,
  UPDATE_USERS,
  ADD_USERS,
  STATE_USERS,
  SIGNUP_USERS,
  LOGIN_USERS
} from "../../Users/userTypes";
export interface initialStateProps {
  loading: Boolean,
  error: string,
  signup?:any,
  users: [],
  isLogin?: boolean
}
const initialState: initialStateProps = {
  loading: false,
  error: "",
  signup:[],
  users: [],
  isLogin: false
};
const reducer = (state = initialState, action:any) => {
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
      case  SIGNUP_USERS:
      return { ...state, signup: [action.payload] }
      case LOGIN_USERS:
        return { ...state, isLogin: action.payload}
    default:
      return state;
  }
};
export default reducer;