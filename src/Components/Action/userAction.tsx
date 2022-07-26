import {
  FETCH_USERS_SUCCESS,
  GET_USERS,
  UPDATE_USERS
} from "../../Users/userTypes";
export const fetchUsersSuccess = (users:any) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};
export const getUsers = (payload: any) => ({
  type: GET_USERS,
  payload
});
export const updateUser = (payload: any) => ({
  type: UPDATE_USERS,
  payload
});