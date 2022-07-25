import { combineReducers } from 'redux'
import usersReducer from './Components/features/usersReducer'
import {persistReducer} from "redux-persist"
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'users',
  storage: storage,
  whitelist: ['users']
};


const rootReducer = combineReducers({
    // @ts-ignore
    // reducer:persistReducer(persistConfig,users)
  users: persistReducer(persistConfig,usersReducer)
})

export default rootReducer;