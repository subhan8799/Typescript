import { combineReducers } from 'redux'
import usersReducer from './Components/Reducers/usersReducer'
import {persistReducer} from "redux-persist"
import storage from 'redux-persist/lib/storage';
const persistConfig = {
  key: 'users',
  storage: storage,
};
const rootReducer = combineReducers({
  users: persistReducer(persistConfig,usersReducer)
})
export default rootReducer;