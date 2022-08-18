import {
  FETCH_USERS_SUCCESS,
  GET_USERS,
  UPDATE_USERS,
  ADD_USERS,
  STATE_USERS,
  SIGNUP_USERS
} from "../../Users/userTypes";
export const fetchUsersSuccess = (users:any) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};
export const stateUsers = (payload: any) => ({
  type: STATE_USERS,
  payload
});
export const getUsers = (payload: any) => ({
  type: GET_USERS,
  payload
});
export const updateUser = (payload: any) => ({
  type: UPDATE_USERS,
  payload
});
export const addUser = (payload: any) => ({
  type: ADD_USERS,
  payload
});
export const signupUsers = (user: any) => (
  {
  type:  SIGNUP_USERS,
  payload: user
}
);